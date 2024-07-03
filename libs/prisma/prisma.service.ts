import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as DevicesDbClient } from '../prisma/generated/devices';
import { PrismaClient as UsersDbClient } from '../prisma/generated/users';
import { PrismaClient as JobsDbClient } from '../prisma/generated/jobs';

@Injectable()
export class UsersDbService extends UsersDbClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

@Injectable()
export class DevicesDbService extends DevicesDbClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

@Injectable()
export class JobsDbService extends JobsDbClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
