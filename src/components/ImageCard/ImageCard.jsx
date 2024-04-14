import css from "./ImageCard.module.css";

export default function ImageCard({
  img: {
    alt_description,
    urls: { small, regular },
  },
  bigImgUrl,
}) {
  const updateImgUrl = () => {
    bigImgUrl(regular);
  };

  return (
    <div>
      <img
        onClick={updateImgUrl}
        className={css.galleriImg}
        src={small}
        alt={alt_description}
      />
    </div>
  );
}
