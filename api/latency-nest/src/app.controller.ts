import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  run(): object {
    return {
      status: 'OK'
    };
  }
}
