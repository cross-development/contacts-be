// Packages
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
// Entities
import { Contact } from './entities/contact.entity';
// Services
import { ContactService } from './contact.service';
// Dto
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactService.create(createContactDto);
  }

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Contact> {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    return this.contactService.remove(id);
  }
}
