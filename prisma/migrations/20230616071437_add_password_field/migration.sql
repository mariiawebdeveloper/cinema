/*
  Warnings:

  - Added the required column `password` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `password` VARCHAR(20) NOT NULL;
