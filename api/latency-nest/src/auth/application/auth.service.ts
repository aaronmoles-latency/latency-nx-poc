import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {
  }

  async execute(): Promise<string> {
    return 'Auth Service';
  }
}
