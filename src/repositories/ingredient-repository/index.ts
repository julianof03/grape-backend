import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.IngredientCreateInput) {
  return prisma.ingredient.create({
    data,
  });
}
async function listIngredient(productId: number) {
  return prisma.ingredient.findMany({
    where:{
      productId
    }
  });
}
const ingredientRepository = {
  create,
  listIngredient,
};

export default ingredientRepository;
