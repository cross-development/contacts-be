// Packages
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// Entities
import { Contact } from './entities/contact.entity';
// Dto
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async findOne(id: string): Promise<Contact> {
    return this.contactRepository.findOneBy({ id });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  async remove(id: string): Promise<void> {
    this.contactRepository.delete(id);
  }
}
