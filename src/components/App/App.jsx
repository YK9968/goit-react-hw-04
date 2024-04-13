import { useState } from "react";
import { fetchImgGallery } from "../../render-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSubmit = async (query) => {
    try {
      setPage(1);
      setQuery(query);
      setImg([]);
      setError(false);
      setLoading(true);
      const images = await fetchImgGallery(query, 1);
      setImg(images);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const addMoreImg = async () => {
    try {
      setLoading(true);
      setPage(page + 1);
      const newImages = await fetchImgGallery(query, page + 1);
      setImg([...img, ...newImages]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} addImg={addMoreImg} />
      {img.length > 0 && <ImageGallery images={img} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {img.length > 0 && <LoadMoreBtn addPage={addMoreImg} />}
    </div>
  );
}
