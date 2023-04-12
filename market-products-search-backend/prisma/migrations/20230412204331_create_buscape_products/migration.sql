-- CreateTable
CREATE TABLE "ProductsBuscape" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "permaLink" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "storeMostCheap" TEXT NOT NULL,
    "price" TEXT NOT NULL
);
