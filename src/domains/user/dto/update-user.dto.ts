// Packages
import { PartialType } from '@nestjs/swagger';
// Dto
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
