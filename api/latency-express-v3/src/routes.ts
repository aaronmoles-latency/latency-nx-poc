import {Request, Response, Router} from "express";
import {container} from "./container";
import Controller from "./shared/controller";
import {HttpMethod} from "./shared/http-method";
import {DiTag} from "./shared/di/di-tag";

export function registerControllers(router: Router) {
    const controllerIds = container.findTaggedServiceIdentifiers(DiTag.CONTROLLER)
    controllerIds.forEach(controllerId => {
        const controller = container.get(controllerId) as Controller
        register(controller, router)
    });
}

function register(controller: Controller, router: Router) {
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
