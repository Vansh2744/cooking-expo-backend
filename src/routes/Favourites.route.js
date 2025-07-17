import { Router } from "express";

import {
  createFavourite,
  deleteFavourite,
  fetchSingleFavourite,
} from "../controllers/Favourites.controller.js";

const router = Router();

router.route("/create").post(createFavourite);
router.route("/delete/:userId/:recipeId").delete(deleteFavourite);
router.route("/fetch/:userId").get(fetchSingleFavourite);

export default router;
