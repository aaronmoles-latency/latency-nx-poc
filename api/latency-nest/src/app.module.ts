import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, DashboardModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
