import productRepository from "@/repositories/product-repository";
import ingredientRepository from "@/repositories/ingredient-repository";

import { Product, Users } from "@prisma/client";
import { IngredientResult } from "@/controllers";

export async function createProducts({ userId, productName }: CreateProductsParams): Promise<Product> {

  return productRepository.create({
    userId, productName 
  });
}
export async function GetProducts( userId:number ) {
  return productRepository.list( userId );
}

export async function getEveryIngredient( result: IngredientResult ) {
   return ingredientRepository.listIngredient( result.id );
}



export type CreateProductsParams = Pick<Product, "userId" | "productName">;
export type getProductsParams = Pick<Product, "userId">;
const productService = {
  createProducts,
  GetProducts,
  getEveryIngredient
};

export default productService;
