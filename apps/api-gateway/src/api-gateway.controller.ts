import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDeviceDto } from 'apps/devices/src/dto/create-device.dto';
import { CreateUserDto } from 'apps/users/src/dto/create-user.dto';

@Controller('/users')
export class ApiGatewayController {
  constructor(
    @Inject('USERS_SERVICE')
    private clientUser: ClientProxy,
    @Inject('DEVICES_SERVICE')
    private clientDevice: ClientProxy,
    @Inject('JOBS_SERVICE')
    private clientJob: ClientProxy,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.clientUser.emit('user_created', createUserDto);
  }

  @Get()
  async getUsers() {
    return this.clientUser.send({ cmd: 'get-all-users' }, '');
  }

  @Post('/:userId/devices')
  async createDevice(
    @Body() createDevice: CreateDeviceDto,
    @Param('usersId', ParseIntPipe) userId: number,
  ) {
    createDevice.userId = userId;
    return this.clientDevice.emit('device_created', createDevice);
  }

  @Get('/:usersId/devices')
  async getDevices(@Param('usersId', ParseIntPipe) usersId: number) {
    return this.clientDevice.send({ cmd: 'get-all-devices' }, { usersId });
  }
}
