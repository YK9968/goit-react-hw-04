import { useState } from "react";
import { fetchImgGallery } from "../../render-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setImg([]);
      setError(false);
      setLoading(true);
      const images = await fetchImgGallery(data);
      setImg(images);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {img.length > 0 && <ImageGallery images={img} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
