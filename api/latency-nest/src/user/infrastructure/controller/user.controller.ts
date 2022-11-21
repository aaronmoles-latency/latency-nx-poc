import { Controller, Get } from '@nestjs/common';
import UserDto from "./dto/user.dto";
import {UserService} from "../../application/user.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('/user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    type: UserDto,
  })
  async run(): Promise<UserDto> {
    return {
      data: await this.userService.execute(),
    };
  }
}
