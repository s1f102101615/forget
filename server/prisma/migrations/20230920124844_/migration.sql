/*
  Warnings:

  - The primary key for the `item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userid` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" DROP CONSTRAINT "item_pkey",
ADD COLUMN     "userid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "item_pkey" PRIMARY KEY ("id");
