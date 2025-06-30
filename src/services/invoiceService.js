import prisma from "../../prisma/client.js";

export async function saveInvoice(req) {
    const payload = req.body;
    const userId = req.user;
    if (!payload?.toBeneficiaryAccountId || !payload?.invoiceTitle || !payload?.amount || !payload?.payeeContact || !payload?.paymentDate) {
        const error = new Error("Required fields are missing");
        error.statusCode = 400;
        throw error;
    }
    payload.userId = userId;
    const bankAccount = await prisma.invoice.create({ data: payload });
    return bankAccount;
}

export async function getInvoiceDetailsById(req) {
    const payload = req.body;
    if (!payload?.id) {
        const error = new Error("Id is required");
        error.statusCode = 409;
        throw error;
    }
    const existingAccount = await prisma.invoice.findUnique({ where: { id: Number(payload.id) } });
    if (!existingAccount) {
        const error = new Error("No invoice created for this id");
        error.statusCode = 409;
        throw error;
    }
    return existingAccount;
}

export async function getListInvoices(req) {
    const userId = req.user;
    const accounts = await prisma.invoice.findMany({ where: { userId: Number(userId) } });
    if (accounts.length === 0) {
        const error = new Error("No beneficiary bank accounts found for this user");
        error.statusCode = 409;
        throw error;
    }
    return accounts;
}

export async function updateInvoiceById(req) {
    let payload = req.body;
    let { id, userId, ...updatedData } = payload;
    let UId = userId || req.user;
    if (!payload?.id) {
        const error = new Error("Id is required");
        error.statusCode = 400;
        throw error;
    }
    const accounts = await prisma.invoice.update({ where: { userId: Number(UId), id: Number(id) }, data: updatedData });
    if (!accounts) {
        const error = new Error("No bank accounts found for this user");
        error.statusCode = 409;
        throw error;
    }
    return accounts;
}

export async function deleteInvoiceById(req) {
    let payload = req.body;
    let userId = req.user;
    if (!payload?.id) {
        const error = new Error("Id is required");
        error.statusCode = 400;
        throw error;
    }
    await prisma.invoice.delete({ where: { userId: Number(userId), id: Number(payload.id) } });
    return "Account deleted successfully";
}