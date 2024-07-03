import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty()
  userId: number;
}
