import { useEffect, useState } from "react";
import "./App.css";
import { getPhotosByQuery } from "./api/api-service";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMsg/ErrorMsg";

function App() {
const [images, setImages] = useState([]);

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);


  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const result = await getPhotosByQuery("nature");
  //     console.log(result);
  //   };
  //   fetchPhotos();
  // }, []);

  const handleSearch = async (query)=>{
    console.log(query);
    try{
      setImages([]);
      setIsLoading (true);
      const data = await getPhotosByQuery(query)
      setImages(data.result);
    }catch(e){
      setError(true)
      console.error(e);
    }finally{
      setIsLoading(false)
    }

  }
console.log(images);

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
      />
      <ImageGallery images={images}/>
      <p>testData</p>
    </>
  );
}

export default App;
