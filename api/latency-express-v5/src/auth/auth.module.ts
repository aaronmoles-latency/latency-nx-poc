import {ContainerBuilder} from "diod";
import {DiTag} from "../shared/di/di-tag";
import {Module} from "../shared/module";
import AuthController from "./auth.controller";
import AuthService from "./auth.service";

export default class AuthModule extends Module {
    register(builder: ContainerBuilder): void {
        builder.registerAndUse(AuthController).addTag(DiTag.CONTROLLER)
        builder.registerAndUse(AuthService)
    }
}
