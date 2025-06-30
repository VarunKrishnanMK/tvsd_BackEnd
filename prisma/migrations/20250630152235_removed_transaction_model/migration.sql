/*
  Warnings:

  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fromBankAccountId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_fromBankAccountId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_toBeneficiaryAccountId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `Transactions_userId_fkey`;

-- AlterTable
ALTER TABLE `bankaccountdetails` MODIFY `accountType` VARCHAR(191) NOT NULL DEFAULT 'SAVINGS';

-- AlterTable
ALTER TABLE `beneficiaryaccountdetails` MODIFY `accountType` VARCHAR(191) NOT NULL DEFAULT 'SAVINGS';

-- AlterTable
ALTER TABLE `invoice` ADD COLUMN `fromBankAccountId` INTEGER NOT NULL,
    ADD COLUMN `transactionDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `transactions`;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_fromBankAccountId_fkey` FOREIGN KEY (`fromBankAccountId`) REFERENCES `BankAccountDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
