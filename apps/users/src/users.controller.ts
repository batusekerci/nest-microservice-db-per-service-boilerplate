import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  @EventPattern('user_created')
  createUsers(@Payload() user: CreateUserDto) {
    return this.usersService.createUsers(user);
  }
  @MessagePattern({ cmd: 'get-all-users' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
