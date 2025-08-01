-- CreateTable
CREATE TABLE "PersonalToken" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "PersonalToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PersonalToken" ADD CONSTRAINT "PersonalToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
