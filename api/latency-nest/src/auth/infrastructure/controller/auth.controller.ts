import { Controller, Get } from '@nestjs/common';
import {AuthService} from "../../application/auth.service";
import AuthDto from "./dto/auth.dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('/auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiResponse({
    type: AuthDto,
  })
  async run(): Promise<AuthDto> {
    return {
      data: await this.authService.execute(),
    };
  }
}
