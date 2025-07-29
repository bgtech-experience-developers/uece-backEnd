/*
  Warnings:

  - A unique constraint covering the columns `[cep]` on the table `address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "address_cep_key" ON "address"("cep");
