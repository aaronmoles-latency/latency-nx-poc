import {Request, Response, Router} from 'express';
import {container} from "../container";
import UserController from "./user.controller";

export const register = (router: Router) => {
    const userController = container.get(UserController);
    router.get('/user', (req: Request, res: Response) =>
        userController.run(req, res)
    );
};
