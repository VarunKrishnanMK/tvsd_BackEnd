import { deleteBankAccountDetailsById, getBankAccountDetailsById, getListBankAccountDetails, saveBankAccount, updateBankAccountDetailsById } from "../services/bankAccountService.js";

export async function createBankAccountController(req, res, next) {
    try {
        await saveBankAccount(req)
        res.status(201).json({ message: "Account created successfully" });
    } catch (error) {
        next(error);
    }
}

export async function getBankAccountByIdController(req, res, next) {
    try {
        const bankAccount = await getBankAccountDetailsById(req)
        res.status(201).json({ bankAccount });
    } catch (error) {
        next(error);
    }
}

export async function getBankAccountListController(req, res, next) {
    try {
        const bankAccounts = await getListBankAccountDetails(req)
        res.status(201).json({ bankAccounts });
    } catch (error) {
        next(error);
    }
}

export async function updateBankAccountByIdController(req, res, next) {
    try {
        const bankAccounts = await updateBankAccountDetailsById(req)
        res.status(201).json({ bankAccounts });
    } catch (error) {
        next(error);
    }
}

export async function deleteBankAccountByIdController(req, res, next) {
    try {
        const bankAccounts = await deleteBankAccountDetailsById(req)
        res.status(201).json({ message: bankAccounts });
    } catch (error) {
        next(error);
    }
}