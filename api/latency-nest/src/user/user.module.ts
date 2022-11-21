import { Module } from '@nestjs/common';
import {UserController} from "./infrastructure/controller/user.controller";
import {UserService} from "./application/user.service";
import {RegisterUserService} from "./application/register-user.service";
import UserRepository from "./domain/user.repository";
import MongoUserRepository from "./infrastructure/repository/mongo.user.repository";
import {RegisterUserController} from "./infrastructure/controller/register-user.controller";

@Module({
    controllers: [
        UserController,
        RegisterUserController,
    ],
    providers: [
        UserService,
        RegisterUserService,
        { provide: UserRepository, useClass: MongoUserRepository}
    ]
})
export class UserModule {}
