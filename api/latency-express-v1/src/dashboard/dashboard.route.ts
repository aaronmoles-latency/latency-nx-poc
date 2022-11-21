import {Request, Response, Router} from 'express';
import {container} from "../container";
import DashboardController from "./dashboard.controller";

export const register = (router: Router) => {
    const dashboardController = container.get(DashboardController);
    router.get('/dashboard', (req: Request, res: Response) =>
        dashboardController.run(req, res)
    );
};
