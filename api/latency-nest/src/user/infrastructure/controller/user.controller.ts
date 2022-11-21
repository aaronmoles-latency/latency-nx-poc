import { Controller, Get } from '@nestjs/common';
import UserDto from "./dto/user.dto";
import {UserService} from "../../application/user.service";

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async run(): Promise<UserDto> {
    return {
      data: await this.userService.execute(),
    };
  }
}
