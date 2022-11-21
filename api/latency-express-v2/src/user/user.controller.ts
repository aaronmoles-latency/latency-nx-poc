import {Request, Response} from "express";
import {ControllerDecorator} from "../shared/decorators/controller.decorator";
import UserService from "./user.service";
import Controller, {ControllerConfig} from "../shared/controller";
import {HttpMethod} from "../shared/http-method";

@ControllerDecorator()
export default class UserController implements Controller {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    get config(): ControllerConfig {
        return {
            method: HttpMethod.GET,
            path: '/user'
        };
    }

    async run(req: Request, res: Response): Promise<void> {
        const result = await this.userService.run()
        res.json({data: result});
    }
}
