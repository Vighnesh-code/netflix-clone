import { fetchFromTMDB } from "../services/tmdb.service.js";

export const getTrendingMovie = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomMovie });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getTrendingMovie Controller: ", error.message);
  }
};

export const getMovieTrailer = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailer: data.results });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getMovieTrailer Controller: ", error.message);
  }
};

export const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    res.json({ success: true, content: data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getMovieDetails Controller: ", error.message);
  }
};

export const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    res.json({ success: true, similar: data.results });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getSimilarMovies Controller: ", error.message);
  }
};

export const getMoviesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );
    res.json({ success: true, content: data.results });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log("Error in getMoviesByCategory Controller: ", error.message);
  }
};
