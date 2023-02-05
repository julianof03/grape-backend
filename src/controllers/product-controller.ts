import productService from "@/services/product-service";
import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import { Ingredient, Product } from "@prisma/client";

async function ProductPost(req: AuthenticatedRequest, res: Response) {
  const { ProductName } = req.body;
  const { userId } = req;
  const productName = ProductName;

  console.log(userId);
  try {
    console.log(productName);
    const result = await productService.createProducts({ productName, userId });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
async function GetProduct(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const result : IngredientResult[] = await productService.GetProducts(userId);
    const newResult = await SearchArray(result);

    return res.status(httpStatus.OK).send(newResult);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

async function SearchArray(result : IngredientResult[]) {
  const auxArray = [];
  for(let i = 0; i < result.length; i++){
    const newresult = await productService.getEveryIngredient(result[i]);
    auxArray.push( [result[i], newresult[i]]);
  }
  return auxArray;
}

export type IngredientResult = {
  id: number
  userId: number
  productName: string
  createdAt: Date
  updatedAt: Date
}


//"userId" | "ingredientName" | "id" | "createdAt" | "updatedAt">;

export {
  ProductPost,
  GetProduct
}
