-- CreateEnum
CREATE TYPE "Categorie" AS ENUM ('Sandwiche', 'Taco', 'Burger', 'Plat', 'Pizza', 'Salade', 'TexMex', 'Boisson', 'Dessert');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('client', 'admin');

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "categorie" "Categorie" NOT NULL,
    "detail" TEXT NOT NULL,
    "productDetails" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT '',
    "role" "Role" NOT NULL DEFAULT 'client',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
