import {HttpMethod} from "./http-method";
import {Request, Response} from "express";

export interface ControllerConfig {
    path: string,
    method: HttpMethod,
}

export default interface Controller {
    get config(): ControllerConfig,
    run(req: Request, res: Response): Promise<void>
}
