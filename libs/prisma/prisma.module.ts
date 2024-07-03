import { Module } from '@nestjs/common';
import {
  DevicesDbService,
  JobsDbService,
  UsersDbService,
} from './prisma.service';

@Module({
  providers: [UsersDbService, DevicesDbService, JobsDbService],
  exports: [UsersDbService, DevicesDbService, JobsDbService],
})
export class PrismaModule {}
