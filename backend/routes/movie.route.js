import express from "express";
import {
  getMovieDetails,
  getMovieTrailer,
  getTrendingMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailer);
router.get("/:id/details", getMovieDetails);

export default router;
