import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.ProductCreateInput) {
  return prisma.product.create({
    data,
  });
}
async function list(userId: number) {
  return prisma.product.findMany({
    where:{
      userId
    }
  });
}

const productRepository = {
  create,
  list,
};

export default productRepository;
