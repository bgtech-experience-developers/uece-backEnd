/*
  Warnings:

  - You are about to drop the column `address_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `data_birth` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `mother_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `courses_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses_users" DROP CONSTRAINT "courses_users_course_id_fkey";

-- DropForeignKey
ALTER TABLE "courses_users" DROP CONSTRAINT "courses_users_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_address_id_fkey";

-- DropIndex
DROP INDEX "users_cpf_key";

-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "address_id",
DROP COLUMN "cpf",
DROP COLUMN "data_birth",
DROP COLUMN "mother_name",
DROP COLUMN "name";

-- DropTable
DROP TABLE "courses_users";

-- CreateTable
CREATE TABLE "Subscribe" (
    "user_id" TEXT NOT NULL,
    "departaments_id" TEXT NOT NULL,
    "is_pcd" BOOLEAN,
    "courses_id" TEXT NOT NULL,
    "path_file_pcd" TEXT,
    "address_id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "data_birth" TIMESTAMP(3) NOT NULL,
    "mother_name" TEXT,
    "father_name" TEXT,
    "cpf" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscribe_pkey" PRIMARY KEY ("user_id","courses_id","departaments_id")
);

-- CreateTable
CREATE TABLE "departament" (
    "id" TEXT NOT NULL,
    "address_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departament_course" (
    "departament_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departament_course_pkey" PRIMARY KEY ("departament_id","course_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscribe_cpf_key" ON "Subscribe"("cpf");

-- CreateIndex
CREATE INDEX "Subscribe_user_id_cpf_idx" ON "Subscribe"("user_id", "cpf");

-- AddForeignKey
ALTER TABLE "Subscribe" ADD CONSTRAINT "Subscribe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscribe" ADD CONSTRAINT "Subscribe_departaments_id_fkey" FOREIGN KEY ("departaments_id") REFERENCES "departament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscribe" ADD CONSTRAINT "Subscribe_courses_id_fkey" FOREIGN KEY ("courses_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscribe" ADD CONSTRAINT "Subscribe_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;
