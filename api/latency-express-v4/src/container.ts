import {ContainerBuilder} from 'diod'
import UserController from "./user/user.controller";
import {Logger} from "./shared/Logger";
import SystemLogger from "./shared/system.logger";
import {Env} from "./shared/env/Env";
import LatencyEnv from "./latency.env";
import UserService from "./user/user.service";
import AuthService from "./auth/auth.service";
import DashboardController from "./dashboard/dashboard.controller";
import DashboardService from "./dashboard/dashboard.service";
import AuthController from "./auth/auth.controller";
import {DiTag} from "./shared/di/di-tag";

const builder = new ContainerBuilder()

builder.register(Logger).use(SystemLogger)
builder.register(Env).useInstance(new LatencyEnv())

builder.registerAndUse(UserController).addTag(DiTag.CONTROLLER)
builder.registerAndUse(UserService)

builder.registerAndUse(DashboardController).addTag(DiTag.CONTROLLER)
builder.registerAndUse(DashboardService)

builder.registerAndUse(AuthController).addTag(DiTag.CONTROLLER)
builder.registerAndUse(AuthService)

export const container = builder.build()
