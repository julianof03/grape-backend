import { ingredientPost } from "@/controllers";
import { authenticateToken, validateIngredient } from "@/middlewares";
import { Router } from "express";

const ingredientRouter = Router();

ingredientRouter 
.all("/*", authenticateToken)
.post("", validateIngredient, ingredientPost);

export { ingredientRouter };