import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaModule } from 'libs/prisma/prisma.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: { urls: ['amqp://rabbitmq:5672'], queue: 'users_queue' },
      },
      {
        name: 'DEVICES_SERVICE',
        transport: Transport.RMQ,
        options: { urls: ['amqp://rabbitmq:5672'], queue: 'devices_queue' },
      },
      {
        name: 'JOBS_SERVICE',
        transport: Transport.RMQ,
        options: { urls: ['amqp://rabbitmq:5672'], queue: 'jobs_queue' },
      },
    ]),
    PrismaModule,
  ],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
