-- CreateTable
CREATE TABLE "Customer" (
    "idCustomer" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Table" (
    "idTable" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "capacity" INTEGER NOT NULL,
    "avalible" BOOLEAN NOT NULL,
    "resutaurantId" INTEGER NOT NULL,

    FOREIGN KEY ("resutaurantId") REFERENCES "Restaurant"("idRestaurant") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "idRestaurant" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer.email_unique" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Table.resutaurantId_unique" ON "Table"("resutaurantId");
