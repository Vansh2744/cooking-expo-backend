import express from "express";
import favouritesRoutes from "./routes/Favourites.route.js";

export const app = express();

app.get("/api/health", (req, res) => {
  res.json({ success: true });
});

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/favourites", favouritesRoutes);
