import { deleteInvoiceById, getInvoiceDetailsById, getListInvoices, saveInvoice, updateInvoiceById } from "../services/invoiceService.js";

export async function createInvoiceController(req, res, next) {
    try {
        await saveInvoice(req)
        res.status(201).json({ message: "Invoice created successfully" });
    } catch (error) {
        next(error);
    }
}

export async function getInvoiceByIdController(req, res, next) {
    try {
        const invoice = await getInvoiceDetailsById(req)
        res.status(201).json({ invoice });
    } catch (error) {
        next(error);
    }
}

export async function getInvoiceListController(req, res, next) {
    try {
        const invoices = await getListInvoices(req)
        res.status(201).json({ invoices });
    } catch (error) {
        next(error);
    }
}

export async function updateInvoiceByIdController(req, res, next) {
    try {
        await updateInvoiceById(req)
        res.status(201).json({ message: "Invoice updated successfully" });
    } catch (error) {
        next(error);
    }
}

export async function deleteInvoiceByIdController(req, res, next) {
    try {
        await deleteInvoiceById(req)
        res.status(201).json({ message: "Invoice deleted successfully" });
    } catch (error) {
        next(error);
    }
}