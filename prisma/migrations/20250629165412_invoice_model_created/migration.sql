-- AlterTable
ALTER TABLE `transactions` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'completed';

-- CreateTable
CREATE TABLE `Invoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `invoiceTitle` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `description` VARCHAR(191) NULL,
    `payeeEmail` VARCHAR(191) NOT NULL,
    `payeeContact` VARCHAR(191) NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `toBeneficiaryAccountId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_toBeneficiaryAccountId_fkey` FOREIGN KEY (`toBeneficiaryAccountId`) REFERENCES `BeneficiaryAccountDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
