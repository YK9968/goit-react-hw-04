import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ images, modal, close }) {
  return (
    <ul className={css.imageGalleryList}>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard img={img} modal={modal} close={close} />
        </li>
      ))}
    </ul>
  );
}
