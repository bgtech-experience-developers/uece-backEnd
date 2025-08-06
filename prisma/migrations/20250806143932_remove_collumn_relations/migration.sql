/*
  Warnings:

  - You are about to drop the column `address_id` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `address_id` on the `departament` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_address_id_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "address_id";

-- AlterTable
ALTER TABLE "departament" DROP COLUMN "address_id";
