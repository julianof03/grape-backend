import ingredientService from "@/services/ingredient-service";
import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";

export async function ingredientPost(req: AuthenticatedRequest, res: Response) {
  const { ingredientName, price, productId, amount, mesure } = req.body;
  const { userId } = req;
  try {
    const result = await ingredientService.createIngredient({userId, ingredientName, price, productId, amount, mesure});
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
