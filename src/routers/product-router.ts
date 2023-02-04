import { ProductPost } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const productRouter = Router();

productRouter
.all("/*", authenticateToken)
.post("", ProductPost);

export { productRouter };