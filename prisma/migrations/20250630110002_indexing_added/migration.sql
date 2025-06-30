-- AlterTable
ALTER TABLE `invoice` ALTER COLUMN `paymentDate` DROP DEFAULT;

-- CreateIndex
CREATE INDEX `BankAccountDetails_accountNumber_idx` ON `BankAccountDetails`(`accountNumber`);

-- CreateIndex
CREATE INDEX `BeneficiaryAccountDetails_accountNumber_idx` ON `BeneficiaryAccountDetails`(`accountNumber`);

-- CreateIndex
CREATE INDEX `Invoice_payeeEmail_payeeContact_idx` ON `Invoice`(`payeeEmail`, `payeeContact`);

-- CreateIndex
CREATE INDEX `User_mobile_email_idx` ON `User`(`mobile`, `email`);
