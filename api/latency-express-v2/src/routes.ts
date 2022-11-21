import * as glob from 'glob';
import {Request, Response, Router} from "express";
import {container} from "./container";
import Controller from "./shared/controller";
import {HttpMethod} from "./shared/http-method";

export function registerControllers(router: Router) {
    const controllers = glob.sync(__dirname + '/**/*.controller.*');
    controllers.map(controller => register(controller, router));
}

function register(controllerPath: string, router: Router) {
    const controllerClass = require(controllerPath).default;
    const controller = container.get<Controller>(controllerClass)
    console.log(controller)
    switch (controller.config.method) {
        case HttpMethod.GET:
            router.get(controller.config.path, (req: Request, res: Response) => controller.run(req, res));
            break
        case HttpMethod.POST:
            router.post(controller.config.path, (req: Request, res: Response) => controller.run(req, res));
            break
        case HttpMethod.PUT:
            router.put(controller.config.path, (req: Request, res: Response) => controller.run(req, res));
            break
        case HttpMethod.DELETE:
            router.delete(controller.config.path, (req: Request, res: Response) => controller.run(req, res));
            break
        default:
            throw new Error('Method ' + controller.config.method + ' not supported.')
    }
}
