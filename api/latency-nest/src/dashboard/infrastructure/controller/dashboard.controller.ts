import { Controller, Get } from '@nestjs/common';
import {DashboardService} from "../../application/dashboard.service";
import DashboardDto from "./dto/dashboard.dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('/dashboard')
@ApiTags('Dashboard')
export class DashboardController {
  constructor(private readonly authService: DashboardService) {}

  @Get()
  @ApiResponse({
    type: DashboardDto,
  })
  async run(): Promise<DashboardDto> {
    return {
      data: await this.authService.execute(),
    };
  }
}
