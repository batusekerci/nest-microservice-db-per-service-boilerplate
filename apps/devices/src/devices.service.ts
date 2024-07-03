import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Device } from 'libs/prisma/generated/devices';
import { DevicesDbService } from 'libs/prisma/prisma.service';

@Injectable()
export class DevicesService {
  constructor(private prisma: DevicesDbService) {}

  async createDevices(device: Device) {
    const exists = await this.prisma.device.findFirst();
    if (exists) {
      throw new ConflictException('Device already exists');
    }
    try {
      const newDevice = await this.prisma.device.create({ data: device });
      return newDevice;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getAllDevices() {
    return this.prisma.device.findMany();
  }
}
