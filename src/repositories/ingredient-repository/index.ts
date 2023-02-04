import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.IngredientCreateInput) {
  return prisma.ingredient.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
