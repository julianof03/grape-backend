import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function validateIngredient(req: Request, res: Response, next: NextFunction) {
    const { ingredientName, price, productId, amount, mesure } = req.body;
    if(!ingredientName || !price || !productId || !amount || !mesure){
        return res.status(httpStatus.BAD_REQUEST).send({message: "Elementos faltando"});
    }
    next();
}
  