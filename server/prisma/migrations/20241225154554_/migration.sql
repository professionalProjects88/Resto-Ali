-- CreateEnum
CREATE TYPE "Categorie" AS ENUM ('Sandwiche', 'Taco', 'Burger', 'Plat', 'Pizza', 'Salade', 'TexMex', 'Boisson', 'Dessert');

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
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);
