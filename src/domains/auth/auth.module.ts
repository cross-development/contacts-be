// Packages
import { Module } from '@nestjs/common';
// Services
import { AuthService } from './auth.service';
// Controllers
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
