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
  const [imgUrl, setImgUlr] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query !== "") {
        try {
          setLoading(true);
          const images = await fetchImgGallery(query, 1);
          setImg(images);
          setPage(1);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    const data = async () => {
      if (page > 1) {
        try {
          setLoading(true);
          const newImages = await fetchImgGallery(query, page);
          setImg((prevImages) => [...prevImages, ...newImages]);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    data();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
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
      <SearchBar onSubmit={handleSubmit} addImg={addMoreImg} />
      {img.length > 0 && <ImageGallery images={img} bigImgUrl={showModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {img.length > 0 && <LoadMoreBtn addPage={addMoreImg} />}
      <ImageModal image={imgUrl} state={modal} close={closeModal} />
    </div>
  );
}
