// Packages
import { PartialType } from '@nestjs/swagger';
// Dto
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
