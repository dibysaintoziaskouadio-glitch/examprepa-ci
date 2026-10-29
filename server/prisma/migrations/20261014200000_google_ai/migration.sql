-- AlterTable
ALTER TABLE "StudentProfile" ADD COLUMN     "aiPlan" JSONB,
ADD COLUMN     "aiPlanAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" DROP NOT NULL;

