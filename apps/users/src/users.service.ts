import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersDbService } from 'libs/prisma/prisma.service';
import { User } from 'libs/prisma/generated/users';

@Injectable()
export class UsersService {
  constructor(private prisma: UsersDbService) {}

  async createUsers(user: User) {
    const exists = await this.prisma.user.findFirst();
    if (exists) {
      throw new ConflictException('User already exists');
    }
    try {
      const newUser = await this.prisma.user.create({ data: user });
      return newUser;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
