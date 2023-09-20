-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL,
    "itemname" TEXT NOT NULL,
    "itemvalue" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);
