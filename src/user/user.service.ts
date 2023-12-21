import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { User } from '../generated/user/user.model';
const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return prisma.user.findUnique({
      where,
    });
  }
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({
      data,
    });
  }
  async updateUser(
    data: Prisma.UserUpdateInput,
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return prisma.user.update({
      data: data,
      where: where,
    });
  }
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return prisma.user.delete({
      where,
    });
  }
}
