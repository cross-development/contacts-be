// Packages
import { Module } from '@nestjs/common';
// Services
import { UserService } from './user.service';
// Controllers
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
