// Packages
import { PartialType } from '@nestjs/swagger';
// Dto
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
