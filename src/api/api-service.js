import axios from "axios";

const KEY = "fs2vmDq1L7qfc64cSDo4a6Nzmyx1a9H62VVOKfjvC2k";
axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotosByQuery = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: KEY,
      query: searchQuery,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return {
    result: response.data.results,
    totalPages: response.data.total_pages,
  };
};
