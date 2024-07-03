import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Job } from 'libs/prisma/generated/jobs';
import { JobsDbService } from 'libs/prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: JobsDbService) {}

  async createJobs(job: Job) {
    const exists = await this.prisma.job.findFirst(job);
    if (exists) {
      throw new ConflictException('Job already exists');
    }
    try {
      const newJob = await this.prisma.job.create(job);
      return newJob;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getAllJobs() {
    return this.prisma.job.findMany();
  }
}
