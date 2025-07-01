import prisma from "../../prisma/client.js";

export async function getUserDashboardService(req) {
    const userId = req.user;
    const totalAccounts = await prisma.bankAccountDetails.count({ where: { userId: userId } });
    const aggregationResult = await prisma.bankAccountDetails.aggregate({ _sum: { balance: true }, where: { userId: userId } });
    const totalAmount = aggregationResult._sum.balance || 0;
    const totalBeneficiary = await prisma.beneficiaryAccountDetails.count({ where: { userId: userId } });
    const totalPendingPayments = await prisma.invoice.findMany({ where: { userId: userId, status: "pending" }, take: 10, orderBy: { createdAt: 'desc' } });
    const totalCompletedPayments = await prisma.invoice.findMany({ where: { userId: userId, status: "completed" }, take: 10, orderBy: { createdAt: 'desc' } });

    let response = {
        totalAccounts,
        totalAmount,
        totalBeneficiary,
        totalPendingPayments,
        totalCompletedPayments
    }
    return response;
}