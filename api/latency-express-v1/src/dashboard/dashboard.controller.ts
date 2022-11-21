import {Request, Response} from "express";
import {Controller} from "../shared/decorators/controller.decorator";
import DashboardService from "./dashboard.service";

@Controller()
export default class DashboardController {
    constructor(
        private readonly dashboardService: DashboardService,
    ) {
    }

    async run(req: Request, res: Response): Promise<void> {
        const result = await this.dashboardService.run()
        res.json({data: result});
    }
}
