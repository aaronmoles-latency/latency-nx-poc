import {Request, Response} from "express";
import {ControllerDecorator} from "../shared/decorators/controller.decorator";
import DashboardService from "./dashboard.service";
import Controller, {ControllerConfig} from "../shared/controller";
import {HttpMethod} from "../shared/http-method";

@ControllerDecorator()
export default class DashboardController implements Controller {
    constructor(
        private readonly dashboardService: DashboardService,
    ) {
    }

    get config(): ControllerConfig {
        return {
            method: HttpMethod.GET,
            path: '/dashboard'
        };
    }

    async run(req: Request, res: Response): Promise<void> {
        const result = await this.dashboardService.run()
        res.json({data: result});
    }
}
