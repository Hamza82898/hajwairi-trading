/*
  Warnings:

  - Made the column `block` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `building` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `flat` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `road` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "block" SET NOT NULL,
ALTER COLUMN "building" SET NOT NULL,
ALTER COLUMN "flat" SET NOT NULL,
ALTER COLUMN "road" SET NOT NULL;
