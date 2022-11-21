import { Controller, Get } from '@nestjs/common';
import {AuthService} from "../../application/auth.service";
import AuthDto from "./dto/auth.dto";

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async run(): Promise<AuthDto> {
    return {
      data: await this.authService.execute(),
    };
  }
}
