import { useState, useEffect } from "react";
import { fetchImgGallery } from "../../render-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [imgUrl, setImgUlr] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const data = async () => {
      try {
        setLoading(true);
        const newImages = await fetchImgGallery(query, page);
        setImg((prevImages) => [...prevImages, ...newImages]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    data();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImg([]);
    setPage(1);
    setError(false);
    setLoading(false);
    setImgUlr(null);
  };

  const addMoreImg = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const showModal = (url) => {
    setImgUlr(url);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {img.length > 0 && <ImageGallery images={img} onClick={showModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {img.length > 0 && <LoadMoreBtn addPage={addMoreImg} />}
      <ImageModal image={imgUrl} state={modal} close={closeModal} />
    </div>
  );
}
