import { getUserDashboardService } from "../services/userDashboardService.js";

export async function getUserDashboardcontroller(req, res, next) {
    try {
        const dashboardDetails = await getUserDashboardService(req)
        res.status(201).json({ dashboardDetails });
    } catch (error) {
        next(error);
    }
}