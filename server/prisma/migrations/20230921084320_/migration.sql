-- CreateTable
CREATE TABLE "userlabel" (
    "userid" TEXT NOT NULL,
    "label" TEXT[],

    CONSTRAINT "userlabel_pkey" PRIMARY KEY ("userid")
);
