// Packages
import { Module } from '@nestjs/common';
// Services
import { ProfileService } from './profile.service';
// Controllers
import { ProfileController } from './profile.controller';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
