-- CreateTable
CREATE TABLE "Environment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "socket" TEXT,
    "host" TEXT,
    "port" INTEGER,
    "protocol" TEXT,
    "ca" TEXT,
    "cert" TEXT,
    "key" TEXT,
    "version" TEXT,

    CONSTRAINT "Environment_pkey" PRIMARY KEY ("id")
);
