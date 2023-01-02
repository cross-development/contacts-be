// Packages
import { Module } from '@nestjs/common';
// Services
import { ContactService } from './contact.service';
// Controllers
import { ContactController } from './contact.controller';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
