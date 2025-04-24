import express from "express";
import {
  getSimilarTvShows,
  getTrendingTvShow,
  getTvShowDetails,
  getTvShowsByCategory,
  getTvShowTrailer,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTvShow);
router.get("/:id/trailers", getTvShowTrailer);
router.get("/:id/details", getTvShowDetails);
router.get("/:id/similar", getSimilarTvShows);
router.get("/:category", getTvShowsByCategory);

export default router;
