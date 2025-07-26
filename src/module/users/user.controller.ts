import { Controller, Delete, Param, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Delete(':id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.deleteUserById(id);
  }
}
