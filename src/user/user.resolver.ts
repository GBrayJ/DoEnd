import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserService } from './user.service';
import { User } from '../generated/user/user.model';
import { FindUniqueUserArgs } from '../generated/user/find-unique-user.args';
import { CreateOneUserArgs } from '../generated/user/create-one-user.args';
import { DeleteOneUserArgs } from '../generated/user/delete-one-user.args';
import { UpdateOneUserArgs } from '../generated/user/update-one-user.args';
import { Task } from "../generated/task/task.model";
import { TaskService } from "../task/task.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService, private taskService: TaskService) {}

  @Query(() => User)
  async user(@Args() findUniqueUserArgs: FindUniqueUserArgs): Promise<User> {
    return this.userService.findOne(findUniqueUserArgs.where);
  }

  @Mutation(() => User)
  async createUser(@Args() args: CreateOneUserArgs): Promise<User> {
    return this.userService.createUser(args.data);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args() deleteOneUserArgs: DeleteOneUserArgs,
  ): Promise<User> {
    return this.userService.deleteUser(deleteOneUserArgs.where);
  }

  @Mutation(() => User)
  async updateUser(
    @Args() updateOneUserArgs: UpdateOneUserArgs,
  ): Promise<User> {
    return this.userService.updateUser(
      updateOneUserArgs.data,
      updateOneUserArgs.where,
    );
  }

  @ResolveField()
  async tasks(@Parent() user: User): Promise<Task[]> {
    return this.taskService.findMany({ where: {
        userId: user.id,
      },
    });
  }
}
