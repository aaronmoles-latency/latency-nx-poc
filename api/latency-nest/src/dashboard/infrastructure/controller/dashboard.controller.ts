import { Controller, Get } from '@nestjs/common';
import {DashboardService} from "../../application/dashboard.service";
import DashboardDto from "./dto/dashboard.dto";

@Controller('/dashboard')
export class DashboardController {
  constructor(private readonly authService: DashboardService) {}

  @Get()
  async run(): Promise<DashboardDto> {
    return {
      data: await this.authService.execute(),
    };
  }
}
