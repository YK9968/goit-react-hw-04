import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ images, bigImgUrl }) {
  return (
    <ul className={css.imageGalleryList}>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard img={img} bigImgUrl={bigImgUrl} />
        </li>
      ))}
    </ul>
  );
}
