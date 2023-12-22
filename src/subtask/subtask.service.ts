import { Injectable } from '@nestjs/common';
import { Subtask } from '../generated/subtask/subtask.model';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class SubtaskService {
  constructor(private prisma: PrismaService) {}
  async createSubtask(data: Prisma.SubtaskCreateInput): Promise<Subtask> {
    return this.prisma.subtask.create({
      data,
    });
  }
  async findOne(
    where: Prisma.SubtaskWhereUniqueInput,
  ): Promise<Subtask | null> {
    return this.prisma.subtask.findUnique({
      where,
    });
  }

  async findMany(args: Prisma.SubtaskFindManyArgs): Promise<Subtask[]> {
    return this.prisma.subtask.findMany(args);
  }
  async updateSubtask(
    data: Prisma.SubtaskUpdateInput,
    where: Prisma.SubtaskWhereUniqueInput,
  ): Promise<Subtask> {
    return this.prisma.subtask.update({
      data: data,
      where: where,
    });
  }
  async deleteSubtask(where: Prisma.SubtaskWhereUniqueInput): Promise<Subtask> {
    return this.prisma.subtask.delete({
      where,
    });
  }
}
