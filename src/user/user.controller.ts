import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(
    // Gets User By ID Or Email
    @Body() userData: { id: string; email: string },
  ): Promise<UserModel> {
    return this.userService.user({
      id: userData.id,
      email: userData.email,
    });
  }
  @Post('create')
  async createUser(
    // Create New User With Name And Email
    @Body() userData: { name: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put('update')
  async updateUser(
    // Only Allows Updating Profile (Tasks Handled Separately)
    @Body() userData: { name?: string; email?: string; id: string },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: userData.id },
      data: { name: userData.name, email: userData.email },
    });
  }

  @Delete('delete')
  async deleteUser(
    // Deletes User By ID Or Email
    @Body() userData: { id: string; email: string },
  ): Promise<UserModel> {
    return this.userService.deleteUser({
      id: userData.id,
      email: userData.email,
    });
  }
}
