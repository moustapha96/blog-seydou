-- CreateEnum
CREATE TYPE "SupervisionStatus" AS ENUM ('IN_PROGRESS', 'DEFENDED', 'ABANDONED');

-- CreateTable
CREATE TABLE "publication_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT '#7c3aed',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "publication_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publications" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "journal" TEXT,
    "publisher" TEXT,
    "year" INTEGER,
    "volume" TEXT,
    "pages" TEXT,
    "doi" TEXT,
    "link" TEXT,
    "abstract" TEXT,
    "citationApa" TEXT,
    "citationMla" TEXT,
    "pdfFile" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "status" "PostStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supervision_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT '#0891b2',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supervision_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supervisions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "studentEmail" TEXT,
    "institution" TEXT DEFAULT 'Universite Cheikh Anta Diop (UCAD)',
    "coSupervisor" TEXT,
    "year" INTEGER,
    "startYear" INTEGER,
    "endYear" INTEGER,
    "status" "SupervisionStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "description" TEXT,
    "link" TEXT,
    "pdfFile" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "supervisions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "publication_categories_name_key" ON "publication_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "publication_categories_slug_key" ON "publication_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "publications_slug_key" ON "publications"("slug");

-- CreateIndex
CREATE INDEX "publications_status_year_idx" ON "publications"("status", "year");

-- CreateIndex
CREATE INDEX "publications_slug_idx" ON "publications"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "supervision_categories_name_key" ON "supervision_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "supervision_categories_slug_key" ON "supervision_categories"("slug");

-- CreateIndex
CREATE INDEX "supervisions_status_year_idx" ON "supervisions"("status", "year");

-- AddForeignKey
ALTER TABLE "publications" ADD CONSTRAINT "publications_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "publication_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supervisions" ADD CONSTRAINT "supervisions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "supervision_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
