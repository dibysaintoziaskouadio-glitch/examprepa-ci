-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "seriesCodes" TEXT[] DEFAULT ARRAY[]::TEXT[];

