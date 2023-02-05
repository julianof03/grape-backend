import ingredientRepository from "@/repositories/ingredient-repository";
import { Ingredient } from "@prisma/client";

export async function createIngredient({ 
  userId, ingredientName, price, 
  productId, amount, mesure }: CreateIngredientParams): Promise<Ingredient> {
  return ingredientRepository.create({
    userId, ingredientName, price, productId, amount, mesure
  });
}



export type CreateIngredientParams = Pick<Ingredient, 
  "productId"     | "amount" 
| "ingredientName" | "mesure" 
| "price"         | "userId">;

const ingredientService = {
  createIngredient,
};

export default ingredientService;
