import css from "./ImageCard.module.css";

export default function ImageCard({
  img: {
    alt_description,
    urls: { small, regular },
  },
  modal,
}) {
  const updateImgUrr = () => {
    modal(regular);
  };

  return (
    <div>
      <img
        onClick={updateImgUrr}
        className={css.galleriImg}
        src={small}
        alt={alt_description}
      />
    </div>
  );
}
