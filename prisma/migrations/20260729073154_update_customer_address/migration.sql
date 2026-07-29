/*
  Warnings:

  - You are about to drop the column `address` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "address",
ADD COLUMN     "block" TEXT,
ADD COLUMN     "building" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "flat" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "road" TEXT;
