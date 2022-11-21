import {Body, Controller, HttpCode, HttpStatus, NotFoundException, Post} from '@nestjs/common';
import {RegisterUserService} from "../../application/register-user.service";
import {ApiNotFoundResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import RegisterUserRequestDto from "./dto/register-user.request.dto";

@Controller('/user')
@ApiTags('User')
export class RegisterUserController {
  constructor(private readonly registerService: RegisterUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Brief description',
  })
  @ApiNotFoundResponse()
  async run(
      @Body() body: RegisterUserRequestDto,
  ): Promise<void> {
    new NotFoundException()
    await this.registerService.execute()
  }
}
