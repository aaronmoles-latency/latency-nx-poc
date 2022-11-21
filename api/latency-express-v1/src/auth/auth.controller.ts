import {Request, Response} from "express";
import {Controller} from "../shared/decorators/controller.decorator";
import AuthService from "./auth.service";

@Controller()
export default class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    async run(req: Request, res: Response): Promise<void> {
        const result = await this.authService.run()
        res.json({data: result});
    }
}
