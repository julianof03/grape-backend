import { ingredientPost } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ingredientRouter = Router();

ingredientRouter
.all("/*", authenticateToken)
.post("", ingredientPost);

export { ingredientRouter };