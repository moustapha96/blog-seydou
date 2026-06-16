-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "slides" JSONB NOT NULL DEFAULT '[]';

-- CreateTable
CREATE TABLE "announcements" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "link" TEXT,
    "linkLabel" TEXT,
    "type" TEXT NOT NULL DEFAULT 'info',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "dismissible" BOOLEAN NOT NULL DEFAULT true,
    "position" INTEGER NOT NULL DEFAULT 0,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);
