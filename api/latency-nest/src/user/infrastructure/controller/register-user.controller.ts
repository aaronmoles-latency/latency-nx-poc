import {Controller, HttpCode, HttpStatus, NotFoundException, Post} from '@nestjs/common';
import {RegisterUserService} from "../../application/register-user.service";

@Controller('/user')
export class RegisterUserController {
  constructor(private readonly registerService: RegisterUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async run(): Promise<void> {
    new NotFoundException()
    await this.registerService.execute()
  }
}
