import { ProductPost, GetProduct} from "@/controllers";
import { authenticateToken,  validateProduct} from "@/middlewares";
import { Router } from "express";

const productRouter = Router();

productRouter
.all("/*", authenticateToken)
.post("", validateProduct, ProductPost)
.get("/list", GetProduct);

export { productRouter };