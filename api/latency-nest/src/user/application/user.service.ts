import { Injectable } from '@nestjs/common';
import UserRepository from "../domain/user.repository";

@Injectable()
export class UserService {
  constructor(
      private readonly userRepository: UserRepository,
  ) {
  }

  async execute(): Promise<string> {
    await this.userRepository.find()
    return 'User Service';
  }
}
