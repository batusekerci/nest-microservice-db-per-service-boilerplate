import { Controller } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateJobDto } from './dto/create-job.dto';

@Controller()
export class JobsController {
  constructor(private jobsService: JobsService) {}
  @EventPattern('job_created')
  createJobs(job: CreateJobDto) {
    return this.jobsService.createJobs(job);
  }
  @MessagePattern({ cmd: 'get-all-jobs' })
  getAllJobs() {
    return this.jobsService.getAllJobs();
  }
}
