/*
  Warnings:

  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "badge" TEXT,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "inStock" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "origin" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 5,
ADD COLUMN     "reviews" INTEGER NOT NULL DEFAULT 0;
