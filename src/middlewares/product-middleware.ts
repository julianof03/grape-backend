import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function validateProduct(req: Request, res: Response, next: NextFunction) {
    const { productName, productValue } = req.body;
    if(!productName || !productValue){
        return res.status(httpStatus.BAD_REQUEST).send({message: "Elementos faltando"});
    }
    next();
}
  