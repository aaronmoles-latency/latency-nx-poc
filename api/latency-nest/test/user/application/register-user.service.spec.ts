import { Test, TestingModule } from '@nestjs/testing';
import {RegisterUserService} from "../../../src/user/application/register-user.service";
import MockUserRepository from "../__mock__/mock.user.repository";
import UserRepository from "../../../src/user/domain/user.repository";

describe('RegisterUserService', () => {
  let service: RegisterUserService;
  let repository: MockUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          RegisterUserService,
          { provide: UserRepository, useClass: MockUserRepository },
      ],
    }).compile();

    service = module.get<RegisterUserService>(RegisterUserService);
    repository = module.get(UserRepository)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call save method', async () => {
    // GIVEN
    // WHEN
    await service.execute()
    // THEN
    repository.toHaveBeenCalledSave()
  });
});
