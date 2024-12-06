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
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);
