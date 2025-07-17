import express from "express";
import favouritesRoutes from "./routes/Favourites.route.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/favourites", favouritesRoutes);
