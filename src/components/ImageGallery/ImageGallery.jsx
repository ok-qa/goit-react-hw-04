import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

const ImageGallery = ({images})=>{
    return (
    <ul className={css.list}>
{images.map((img)=>{
return (<li className={css.listItem} key={img.id}>
           <ImageCard data={img}/> 
        </li>)})}   
    </ul>)
}

export default ImageGallery;