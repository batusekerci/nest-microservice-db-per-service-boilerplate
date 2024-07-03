import { NestFactory } from '@nestjs/core';
import { DevicesModule } from './devices.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DevicesModule,
    {
      transport: Transport.RMQ,
      options: { urls: ['amqp://rabbitmq:5672'], queue: 'devices_queue' },
    },
  );
  await app.listen();
}
bootstrap();
