/*
  Warnings:

  - You are about to drop the column `street_adress` on the `address` table. All the data in the column will be lost.
  - Added the required column `street` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "street_adress",
ADD COLUMN     "street" VARCHAR(50) NOT NULL;
