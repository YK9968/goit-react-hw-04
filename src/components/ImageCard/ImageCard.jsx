import css from "./ImageCard.module.css";

export default function ImageCard({
  img: {
    alt_description,
    urls: { small },
  },
}) {
  return (
    <div>
      <img className={css.galleriImg} src={small} alt={alt_description} />
    </div>
  );
}
