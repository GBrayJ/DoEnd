import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from '../generated/user/user.model';
import { PrismaService } from '../prisma.service';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where,
    });
  }
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async updateUser(
    data: Prisma.UserUpdateInput,
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.update({
      data: data,
      where: where,
    });
  }
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

}
