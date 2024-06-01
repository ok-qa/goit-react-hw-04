import css from './ImageCard.module.css'

const ImageCard = ({data})=>{
    return(<div className={css.container}>
        <img className={css.img} key={data.breadcrumbs.id} src={data.urls.small} alt={data.alt_description} />
        </div>)
}

export default ImageCard;