import {Request, Response} from "express";
import {Controller} from "../shared/decorators/controller.decorator";
import UserService from "./user.service";

@Controller()
export default class UserController {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    async run(req: Request, res: Response): Promise<void> {
        const result = await this.userService.run()
        res.json({data: result});
    }
}
