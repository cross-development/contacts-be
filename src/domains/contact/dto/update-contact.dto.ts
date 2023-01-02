// Packages
import { PartialType } from '@nestjs/swagger';
// Dto
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {}
