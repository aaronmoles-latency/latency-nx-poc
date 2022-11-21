import {Request, Response} from "express";
import {ControllerDecorator} from "../shared/decorators/controller.decorator";
import AuthService from "./auth.service";
import Controller, {ControllerConfig} from "../shared/controller";
import {HttpMethod} from "../shared/http-method";

@ControllerDecorator()
export default class AuthController implements Controller {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    get config(): ControllerConfig {
        return {
            method: HttpMethod.GET,
            path: '/auth'
        };
    }

    async run(req: Request, res: Response): Promise<void> {
        const result = await this.authService.run()
        res.json({data: result});
    }
}
