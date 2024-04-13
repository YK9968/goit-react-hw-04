import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const onSubmitBar = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = form.elements.search.value;

    if (data.trim() === "") {
      toast.error("Sorry, input is emty. Please try again!");
      return;
    }
    onSubmit(data.trim());

    form.reset();
  };

  return (
    <header className={css.headerContainer}>
      <form className={css.formContainer} onSubmit={onSubmitBar}>
        <input
          className={css.headerInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.headerBtn} type="submit">
          <IoSearch size={15} />
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}
