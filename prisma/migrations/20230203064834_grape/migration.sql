/*
  Warnings:

  - You are about to drop the column `porductName` on the `Product` table. All the data in the column will be lost.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "porductName",
ADD COLUMN     "productName" VARCHAR(255) NOT NULL;
