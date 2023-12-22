import { Injectable } from '@nestjs/common';
import { Task } from '../generated/task/task.model';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }
  async findOne(where: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where,
    });
  }

  async findMany(args: Prisma.TaskFindManyArgs): Promise<Task[]> {
    return this.prisma.task.findMany(args);
  }
  async updateTask(
    data: Prisma.TaskUpdateInput,
    where: Prisma.TaskWhereUniqueInput,
  ): Promise<Task> {
    return this.prisma.task.update({
      data: data,
      where: where,
    });
  }
  async deleteTask(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.delete({
      where,
    });
  }
}
