import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const API_KEY = "7yGMRxceie6BzHzBqtS3DZY0cJLr7mnIne-jqwYoVsw";

export const fetchImgGallery = async (query, page) => {
  const orientationImg = "landscape";
  const response = axios.get("", {
    params: {
      query: query,
      page: page,
      per_page: 15,
      client_id: API_KEY,
      orientation: orientationImg,
    },
  });

  return (await response).data.results;
};
