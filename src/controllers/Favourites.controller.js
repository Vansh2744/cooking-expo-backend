import { db } from "../config/db.js";
import { favouritesTable } from "../db/schema.js";
import { and, eq } from "drizzle-orm";

const createFavourite = async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, serving } = req.body;

    if (!userId || !recipeId || !title) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await db
      .insert(favouritesTable)
      .values({
        userId,
        recipeId,
        title,
        image,
        cookTime,
        serving,
      })
      .returning();

    return res.status(200).json({
      success: true,
      result: result[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteFavourite = async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    if (!userId || !recipeId) {
      return res.status(400).json({
        success: false,
        message: "userId and recipeId is required",
      });
    }

    const parsedRecipeId = parseInt(recipeId);
    if (isNaN(parsedRecipeId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid recipeId",
      });
    }

    await db
      .delete(favouritesTable)
      .where(
        and(
          eq(favouritesTable.userId, userId),
          eq(favouritesTable.recipeId, parsedRecipeId)
        )
      );

    return res.status(200).json({
      success: true,
      message: "favourites deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

const fetchSingleFavourite = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId shouldn't be empty",
      });
    }

    const favourite = await db
      .select()
      .from(favouritesTable)
      .where(eq(favouritesTable.userId, userId));

    res.status(200).json({
      success: true,
      result: favourite[0],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

export { createFavourite, deleteFavourite, fetchSingleFavourite };
