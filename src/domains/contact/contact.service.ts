// Packages
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const contact = new Contact();

    Object.assign(contact, createContactDto);

    return this.contactRepository.save(contact);
  }

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async findOne(id: string): Promise<Contact> {
    return this.contactRepository.findOneBy({ id });
  }

  async update(id: string, updateContactDto: UpdateContactDto): Promise<Contact> {
    const contact = await this.findOne(id);

    if (!contact) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    Object.assign(contact, updateContactDto);

    return this.contactRepository.save(contact);
  }

  async remove(id: string): Promise<void> {
    this.contactRepository.delete(id);
  }
}
