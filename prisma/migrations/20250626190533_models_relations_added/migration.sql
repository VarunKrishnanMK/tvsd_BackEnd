/*
  Warnings:

  - Added the required column `nickName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `nickName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `BankAccountDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `accountHolderName` VARCHAR(191) NOT NULL,
    `accountHolderNickName` VARCHAR(191) NOT NULL,
    `accountNumber` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `balance` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `branch` VARCHAR(191) NOT NULL,
    `ifscCode` VARCHAR(191) NOT NULL,
    `pincode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BankAccountDetails_accountNumber_key`(`accountNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BeneficiaryAccountDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `accountHolderName` VARCHAR(191) NOT NULL,
    `accountHolderNickName` VARCHAR(191) NOT NULL,
    `accountNumber` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `branch` VARCHAR(191) NOT NULL,
    `ifscCode` VARCHAR(191) NOT NULL,
    `pincode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BeneficiaryAccountDetails_accountNumber_key`(`accountNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `description` VARCHAR(191) NULL,
    `transactionDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'COMPLETED',
    `fromBankAccountId` INTEGER NOT NULL,
    `toBeneficiaryAccountId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BankAccountDetails` ADD CONSTRAINT `BankAccountDetails_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BeneficiaryAccountDetails` ADD CONSTRAINT `BeneficiaryAccountDetails_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_fromBankAccountId_fkey` FOREIGN KEY (`fromBankAccountId`) REFERENCES `BankAccountDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_toBeneficiaryAccountId_fkey` FOREIGN KEY (`toBeneficiaryAccountId`) REFERENCES `BeneficiaryAccountDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
