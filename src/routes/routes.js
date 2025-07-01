import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { getUserController, login, register, updateUserController } from '../controllers/userController.js';
import { createBankAccountController, deleteBankAccountByIdController, getBankAccountByIdController, getBankAccountListController, updateBankAccountByIdController } from '../controllers/bankAccountController.js';
import { createBeneAccountController, deleteBeneAccountByIdController, getBeneAccountByIdController, getBeneAccountListController, updateBeneAccountByIdController } from '../controllers/beneficiaryAccountController.js';
import { createInvoiceController, deleteInvoiceByIdController, getInvoiceByIdController, getInvoiceListController, updateInvoiceByIdController } from '../controllers/invoiceController.js';
import { getUserDashboardcontroller } from '../controllers/userDashboardController.js';

export const router = express.Router();

// Test Route 
router.get('/', (req, res) => {
    res.status(200).send('Hello from Express.js!');
});

// User Routes 
router.post('/register', register);
router.post('/login', login);
router.post('/getUser', authenticateToken, getUserController);
router.patch('/updateUser', authenticateToken, updateUserController);

// Dashboard
router.post('/getUserDashboard', authenticateToken, getUserDashboardcontroller)



// User Bank Account Routes
router.post('/createBankAccount', authenticateToken, createBankAccountController);
router.post('/getBankAccountById', authenticateToken, getBankAccountByIdController);
router.post('/getBankAccounts', authenticateToken, getBankAccountListController);
router.patch('/updateBankAccountById', authenticateToken, updateBankAccountByIdController);
router.delete('/deleteBankAccountById', authenticateToken, deleteBankAccountByIdController);

// Beneficiary Bank Account Routes
router.post('/createBeneficiaryAccount', authenticateToken, createBeneAccountController);
router.post('/getBeneficiaryAccountById', authenticateToken, getBeneAccountByIdController);
router.post('/getBeneficiaryAccounts', authenticateToken, getBeneAccountListController);
router.patch('/updateBeneficiaryAccountById', authenticateToken, updateBeneAccountByIdController);
router.delete('/deleteBeneficiaryAccountById', authenticateToken, deleteBeneAccountByIdController);

// Invoice Routes
router.post('/createInvoice', authenticateToken, createInvoiceController);
router.post('/getInoviceById', authenticateToken, getInvoiceByIdController);
router.post('/getInvoices', authenticateToken, getInvoiceListController);
router.patch('/updateInvoiceById', authenticateToken, updateInvoiceByIdController);
router.delete('/deleteInvoiceById', authenticateToken, deleteInvoiceByIdController);