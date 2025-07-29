/*
  Warnings:

  - The primary key for the `courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `courses_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "courses_users" DROP CONSTRAINT "courses_users_course_id_fkey";

-- DropForeignKey
ALTER TABLE "courses_users" DROP CONSTRAINT "courses_users_user_id_fkey";

-- AlterTable
ALTER TABLE "courses" DROP CONSTRAINT "courses_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "courses_users" DROP CONSTRAINT "courses_users_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "course_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "courses_users_pkey" PRIMARY KEY ("user_id", "course_id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "courses_users" ADD CONSTRAINT "courses_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_users" ADD CONSTRAINT "courses_users_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
