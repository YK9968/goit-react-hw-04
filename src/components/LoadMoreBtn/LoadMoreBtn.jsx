import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ addPage }) {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button onClick={addPage} type="button" className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
