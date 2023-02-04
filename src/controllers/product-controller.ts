import productService from "@/services/product-service";
import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";

export async function ProductPost(req: AuthenticatedRequest, res: Response) {
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
