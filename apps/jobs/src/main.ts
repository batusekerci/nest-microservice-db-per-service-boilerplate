import { NestFactory } from '@nestjs/core';
import { JobsModule } from './jobs.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    JobsModule,
    {
      transport: Transport.RMQ,
      options: { urls: ['amqp://rabbitmq:5672'], queue: 'jobs_queue' },
    },
  );
  await app.listen();
}
bootstrap();
