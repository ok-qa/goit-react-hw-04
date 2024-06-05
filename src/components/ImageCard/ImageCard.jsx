import css from "./ImageCard.module.css";

const ImageCard = ({ data, setModalImgSrc }) => {
  const handleClick = () => {
    setModalImgSrc(data.urls.full);
  };
  return (
    <div className={css.container}>
      <img
        className={css.img}
        key={data.id}
        src={data.urls.small}
        alt={data.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
