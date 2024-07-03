import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty()
  userId: number;
}
