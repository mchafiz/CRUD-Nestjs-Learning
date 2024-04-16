import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
import * as bcrypt from 'bcrypt';
import { Address, Contact, User } from '@prisma/client';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteAll() {
    await this.deleteAddress();
    await this.deleteContact();
    await this.deleteUser();
  }

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: {
        username: 'abc',
      },
    });
  }

  async getUser(): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        username: 'abc',
      },
    });
  }

  async createUser() {
    await this.prismaService.user.create({
      data: {
        username: 'abc',
        name: 'abc',
        password: await bcrypt.hash('abc', 10),
        token: 'test',
      },
    });
  }

  async createContact() {
    await this.prismaService.contact.create({
      data: {
        first_name: 'abc',
        last_name: 'abc',
        email: 'abc@example.com',
        phone: '99999',
        username: 'abc',
      },
    });
  }

  async getContact(): Promise<Contact> {
    const response = await this.prismaService.contact.findFirst({
      where: {
        username: 'abc',
      },
    });
    return response;
  }

  async deleteContact() {
    await this.prismaService.contact.deleteMany({
      where: {
        username: 'abc',
      },
    });
  }

  async createAddress() {
    const contact = await this.getContact();
    await this.prismaService.address.create({
      data: {
        contact_id: contact.id,
        street: 'jalan test',
        city: 'kota test',
        province: 'provinsi test',
        country: 'negara test',
        postal_code: '12345',
      },
    });
  }

  async deleteAddress() {
    await this.prismaService.address.deleteMany({
      where: {
        contact: {
          username: 'abc',
        },
      },
    });
  }

  async getAddress(): Promise<Address> {
    return await this.prismaService.address.findFirst({
      where: {
        contact: {
          username: 'abc',
        },
      },
    });
  }
}
