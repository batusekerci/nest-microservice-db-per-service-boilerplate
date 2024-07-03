import { Controller } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller()
export class DevicesController {
  constructor(private devicesService: DevicesService) {}
  @EventPattern('device_created')
  createDevices(device: CreateDeviceDto) {
    return this.devicesService.createDevices(device);
  }
  @MessagePattern({ cmd: 'get-all-devices' })
  getAllDevices() {
    return this.devicesService.getAllDevices();
  }
}
