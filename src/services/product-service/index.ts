import productRepository from "@/repositories/product-repository";
import { Product, Users } from "@prisma/client";

export async function createProducts({ userId, productName }: CreateProductsParams): Promise<Product> {

  return productRepository.create({
    userId, productName 
  });
}



export type CreateProductsParams = Pick<Product, "userId" | "productName">;

const productService = {
  createProducts,
};

export default productService;
