import {Request, Response, Router} from 'express';
import {container} from "../container";
import AuthController from "./auth.controller";

export const register = (router: Router) => {
    const authController = container.get(AuthController);
    router.get('/auth', (req: Request, res: Response) =>
        authController.run(req, res)
    );
};
