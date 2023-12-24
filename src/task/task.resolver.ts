import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { TaskService } from './task.service';
import { Task } from '../generated/task/task.model';
import { FindUniqueTaskArgs } from '../generated/task/find-unique-task.args';
import { CreateOneTaskArgs } from '../generated/task/create-one-task.args';
import { DeleteOneTaskArgs } from '../generated/task/delete-one-task.args';
import { UpdateOneTaskArgs } from '../generated/task/update-one-task.args';
import { FindManyTaskArgs } from '../generated/task/find-many-task.args';
import { UserService } from '../user/user.service';
import { User } from '../generated/user/user.model';
import { Logger } from "@nestjs/common";
import { Subtask } from "../generated/subtask/subtask.model";
import { SubtaskService } from "../subtask/subtask.service";

@Resolver(() => Task)
export class TaskResolver {
  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private subtaskService: SubtaskService,
  ) {}

  @Query(() => Task)
  async task(@Args() findUniqueTaskArgs: FindUniqueTaskArgs): Promise<Task> {
    return this.taskService.findOne(findUniqueTaskArgs.where);
  }

  @Query(() => [Task])
  async tasks(@Args() findManyTaskArgs: FindManyTaskArgs): Promise<Task[]> {
    return this.taskService.findMany(findManyTaskArgs);
  }

  @Mutation(() => Task)
  async createTask(@Args() args: CreateOneTaskArgs): Promise<Task> {
    return this.taskService.createTask(args.data);
  }

  @Mutation(() => Task)
  async deleteTask(
    @Args() deleteOneTaskArgs: DeleteOneTaskArgs,
  ): Promise<Task> {
    return this.taskService.deleteTask(deleteOneTaskArgs.where);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args() updateOneTaskArgs: UpdateOneTaskArgs,
  ): Promise<Task> {
    return this.taskService.updateTask(
      updateOneTaskArgs.data,
      updateOneTaskArgs.where,
    );
  }

  @ResolveField(() => [User])
  async user(@Parent() task: Task): Promise<User> {
    return this.userService.findOne({ id: task.userId });
  }
  @ResolveField(() => [Subtask])
  async subtasks(@Parent() task: Task): Promise<Subtask[]> {
    return this.subtaskService.findMany({
      where: {
        taskId: task.id,
      },
    });
  }
}
