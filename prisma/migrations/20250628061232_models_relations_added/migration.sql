-- AlterTable
ALTER TABLE `bankaccountdetails` ADD COLUMN `accountType` VARCHAR(191) NOT NULL DEFAULT 'Savings Account';

-- AlterTable
ALTER TABLE `beneficiaryaccountdetails` ADD COLUMN `accountType` VARCHAR(191) NOT NULL DEFAULT 'Savings Account';
