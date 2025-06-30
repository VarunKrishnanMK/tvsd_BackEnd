import { deleteBeneficiaryAccountDetailsById, getBeneficiaryAccountDetailsById, getListBeneficiaryAccountDetails, saveBeneficiaryAccount, updateBeneficiaryAccountDetailsById } from "../services/beneficiaryAccountService.js";

export async function createBeneAccountController(req, res, next) {
    try {
        await saveBeneficiaryAccount(req)
        res.status(201).json({ message: "Account created successfully" });
    } catch (error) {
        next(error);
    }
}

export async function getBeneAccountByIdController(req, res, next) {
    try {
        const beneficiaryAccount = await getBeneficiaryAccountDetailsById(req)
        res.status(201).json({ beneficiaryAccount });
    } catch (error) {
        next(error);
    }
}

export async function getBeneAccountListController(req, res, next) {
    try {
        const beneficiaryAccount = await getListBeneficiaryAccountDetails(req)
        res.status(201).json({ beneficiaryAccount });
    } catch (error) {
        next(error);
    }
}

export async function updateBeneAccountByIdController(req, res, next) {
    try {
        const beneficiaryAccount = await updateBeneficiaryAccountDetailsById(req)
        res.status(201).json({ beneficiaryAccount });
    } catch (error) {
        next(error);
    }
}

export async function deleteBeneAccountByIdController(req, res, next) {
    try {
        const message = await deleteBeneficiaryAccountDetailsById(req)
        res.status(201).json({ message });
    } catch (error) {
        next(error);
    }
}