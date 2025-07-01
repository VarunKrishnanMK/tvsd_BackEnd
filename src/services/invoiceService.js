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
        return "No invoice created for this id";
    }
    return existingAccount;
}

export async function getListInvoices(req) {
    const userId = req.user;
    const page = parseInt(req.body.page) || 1;
    const pageSize = parseInt(req.body.pageSize) || 10;
    const skipAmount = (page - 1) * pageSize;
    const accounts = await prisma.invoice.findMany({ where: { userId: parseInt(userId) }, take: pageSize, skip: skipAmount });
    if (accounts.length === 0) {
        return "No beneficiary bank accounts found for this user";
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
    const accounts = await prisma.invoice.update({ where: { userId: Number(UId), id: parseInt(id) }, data: updatedData });
    if (!accounts) {
        return "No bank accounts found for this user";
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
    await prisma.invoice.delete({ where: { userId: parseInt(userId), id: Number(payload.id) } });
    return "Account deleted successfully";
}