-- AlterTable
ALTER TABLE "Subtask" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "priority" DROP NOT NULL;
