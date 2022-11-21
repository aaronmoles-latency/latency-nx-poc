import { Module } from '@nestjs/common';
import {DashboardController} from "./infrastructure/controller/dashboard.controller";
import {DashboardService} from "./application/dashboard.service";

@Module({
    controllers: [
        DashboardController,
    ],
    providers: [
        DashboardService,
    ]
})
export class DashboardModule {}
