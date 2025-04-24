import { fetchFromTMDB } from "../services/tmdb.service.js";

export const getTrendingTvShow = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
    );
    const randomTvShow =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomTvShow });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getTrendingTvShow Controller: ", error.message);
  }
};

export const getTvShowTrailer = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailer: data.results });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getTvShowTrailer Controller: ", error.message);
  }
};

export const getTvShowDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    res.json({ success: true, content: data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getTvShowDetails Controller: ", error.message);
  }
};

export const getSimilarTvShows = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );
    res.json({ success: true, similar: data.results });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getSimilarTvShows Controller: ", error.message);
  }
};

export const getTvShowsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );
    res.json({ success: true, content: data.results });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getTvShowsByCategory Controller: ", error.message);
  }
};
