import { Injectable } from '@nestjs/common';
import UserRepository from "../domain/user.repository";

@Injectable()
export class RegisterUserService {
  constructor(private readonly userRepository: UserRepository) {
  }

  async execute(): Promise<void> {
    await this.userRepository.save();
  }
}
