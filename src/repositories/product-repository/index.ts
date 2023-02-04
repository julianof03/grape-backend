import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.ProductCreateInput) {
  return prisma.product.create({
    data,
  });
}

const productRepository = {
  create,
};

export default productRepository;
