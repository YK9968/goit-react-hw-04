import { useState } from "react";
import { fetchImgGallery } from "../../render-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setImg([]);
      setLoading(true);
      const images = await fetchImgGallery(data);
      setImg(images);
    } catch {
      console.log(console.error());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {img.length > 0 && <ImageGallery images={img} />}
    </div>
  );
}
