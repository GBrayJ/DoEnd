import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SubtaskService } from './subtask.service';
import { Subtask } from '../generated/subtask/subtask.model';
import { FindUniqueSubtaskArgs } from '../generated/subtask/find-unique-subtask.args';
import { CreateOneSubtaskArgs } from '../generated/subtask/create-one-subtask.args';
import { DeleteOneSubtaskArgs } from '../generated/subtask/delete-one-subtask.args';
import { UpdateOneSubtaskArgs } from '../generated/subtask/update-one-subtask.args';
import { FindManySubtaskArgs } from '../generated/subtask/find-many-subtask.args';
import { TaskService } from '../task/task.service';
import { Task } from '../generated/task/task.model';
import { User } from '../generated/user/user.model';
import { UserService } from '../user/user.service';
import { Type } from 'class-transformer';
import { Logger } from "@nestjs/common";

@Resolver(() => Subtask)
export class SubtaskResolver {
  constructor(
    private subtaskService: SubtaskService,
    private taskService: TaskService,
    private userService: UserService,
  ) {}

  @Query(() => Subtask)
  async subtask(
    @Args() findUniqueSubtaskArgs: FindUniqueSubtaskArgs,
  ): Promise<Subtask> {
    return this.subtaskService.findOne(findUniqueSubtaskArgs.where);
  }

  @Query(() => [Subtask])
  async subtasks(
    @Args() findManySubtaskArgs: FindManySubtaskArgs,
  ): Promise<Subtask[]> {
    return this.subtaskService.findMany(findManySubtaskArgs);
  }

  @Mutation(() => Subtask)
  async createSubtask(@Args() args: CreateOneSubtaskArgs): Promise<Subtask> {
    return this.subtaskService.createSubtask(args.data);
  }

  @Mutation(() => Subtask)
  async deleteSubtask(
    @Args() deleteOneSubtaskArgs: DeleteOneSubtaskArgs,
  ): Promise<Subtask> {
    return this.subtaskService.deleteSubtask(deleteOneSubtaskArgs.where);
  }

  @Mutation(() => Subtask)
  async updateSubtask(
    @Args() updateOneSubtaskArgs: UpdateOneSubtaskArgs,
  ): Promise<Subtask> {
    return this.subtaskService.updateSubtask(
      updateOneSubtaskArgs.data,
      updateOneSubtaskArgs.where,
    );
  }

  @ResolveField()
  async task(@Parent() subtask: Subtask): Promise<Task> {
    return this.taskService.findOne({ id: subtask.taskId });
  }
}
