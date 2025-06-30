import prisma from "../../prisma/client.js";

export async function saveBankAccount(req) {
    const payload = req.body;
    const userId = req.user;
    if (!payload?.accountNumber || !payload?.accountType || !payload?.bankName || !payload?.ifscCode) {
        const error = new Error("Required fields are missing");
        error.statusCode = 400;
        throw error;
    }
    payload.userId = userId;
    const bankAccount = await prisma.bankAccountDetails.create({ data: payload });
    return bankAccount;
}

export async function getBankAccountDetailsById(req) {
    const payload = req.body;
    if (!payload?.id) {
        const error = new Error("Id is required");
        error.statusCode = 409;
        throw error;
    }
    const existingAccount = await prisma.bankAccountDetails.findUnique({ where: { id: Number(payload.id) } });
    if (!existingAccount) {
        const error = new Error("Bank account details does not exists");
        error.statusCode = 409;
        throw error;
    }
    return existingAccount;
}

export async function getListBankAccountDetails(req) {
    const userId = req.user;
    const accounts = await prisma.bankAccountDetails.findMany({ where: { userId: Number(userId) } });
    if (accounts.length === 0) {
        const error = new Error("No bank accounts found for this user");
        error.statusCode = 409;
        throw error;
    }
    return accounts;
}

export async function updateBankAccountDetailsById(req) {
    let payload = req.body;
    let { id, userId, ...updatedData } = payload;
    let UId = userId || req.user;
    if (!payload?.id) {
        const error = new Error("Id is required");
        error.statusCode = 400;
        throw error;
    }
    const accounts = await prisma.bankAccountDetails.update({ where: { userId: Number(UId), id: Number(id) }, data: updatedData });
    if (!accounts) {
        const error = new Error("No bank accounts found for this user");
        error.statusCode = 409;
        throw error;
    }
    return accounts;
}

export async function deleteBankAccountDetailsById(req) {
    let payload = req.body;
    let userId = req.user;
    if (!payload?.id) {
        const error = new Error("Id is required");
        error.statusCode = 400;
        throw error;
    }
    await prisma.bankAccountDetails.delete({ where: { userId: Number(userId), id: Number(payload.id) } });
    return "Account deleted successfully";
}