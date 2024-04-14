import css from "./ImageCard.module.css";

export default function ImageCard({
  img: {
    alt_description,
    urls: { small, regular },
  },
  onClick,
}) {
  return (
    <div>
      <img
        onClick={() => onClick(regular)}
        className={css.galleriImg}
        src={small}
        alt={alt_description}
      />
    </div>
  );
}
