import { useEffect, useState } from "react";
import Modal from "react-modal";
import css from "./App.module.css";
import { getPhotosByQuery } from "./api/api-service";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMsg/ErrorMsg";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const testImage = {
  id: "5AiWn2U10cw",
  urls: {
    full: "https://images.unsplash.com/photo-1626148749358-5b3b3f45b41a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTc4MDN8MHwxfHNlYXJjaHwxfHxjbHVlfGVufDB8MHx8fDE3MTc1MjA2MjJ8MA&ixlib=rb-4.0.3&q=85",
    small:
      "https://images.unsplash.com/photo-1626148749358-5b3b3f45b41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTc4MDN8MHwxfHNlYXJjaHwxfHxjbHVlfGVufDB8MHx8fDE3MTc1MjA2MjJ8MA&ixlib=rb-4.0.3&q=80&w=400",
  },
};

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  useEffect(() => {
    if (modalImgSrc) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [modalImgSrc]);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const data = await getPhotosByQuery(query, nextPage);
    setPage(nextPage);
    setImages((prev) => [...prev, ...data.result]);
  };

  const handleSearch = async (query) => {
    try {
      setQuery(query);
      setImages([]);
      setPage(1);
      setIsLoading(true);
      const data = await getPhotosByQuery(query, 1);
      // const data = await getPhotosByQuery(null, 1);
      setImages(data.result);
      setTotalPages(data.totalPages);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const showLoadMoreBtn = page + 1 <= totalPages;

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} setModalImgSrc={setModalImgSrc} />
      {showLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpenModal={modalIsOpen}
        closeModal={() => setIsOpen(false)}
        selectedImgSrc={modalImgSrc}
      />
    </div>
  );
}

export default App;
