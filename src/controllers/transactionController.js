import { deleteTransationDetailsById, getListTransactionDetails, getTransactionDetailsById, saveTransaction, updateTransactionDetailsById } from "../services/transactionService";

export async function createTransactionController(req, res, next) {
    try {
        const transaction = await saveTransaction(req)
        res.status(201).json({ transaction });
    } catch (error) {
        next(error);
    }
}

export async function getTransactionByIdController(req, res, next) {
    try {
        const transaction = await getTransactionDetailsById(req)
        res.status(201).json({ transaction });
    } catch (error) {
        next(error);
    }
}

export async function getTransactionListController(req, res, next) {
    try {
        const transactions = await getListTransactionDetails(req)
        res.status(201).json({ transactions });
    } catch (error) {
        next(error);
    }
}

export async function updateTransactionByIdController(req, res, next) {
    try {
        const transactions = await updateTransactionDetailsById(req)
        res.status(201).json({ transactions });
    } catch (error) {
        next(error);
    }
}

export async function deleteTransactionByIdController(req, res, next) {
    try {
        const message = await deleteTransationDetailsById(req)
        res.status(201).json({ message });
    } catch (error) {
        next(error);
    }
}