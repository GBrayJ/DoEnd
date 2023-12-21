import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../generated/user/user.model';
import { FindUniqueUserArgs } from '../generated/user/find-unique-user.args';
import { CreateOneUserArgs } from '../generated/user/create-one-user.args';
import { DeleteOneUserArgs } from '../generated/user/delete-one-user.args';
import { UpdateOneUserArgs } from '../generated/user/update-one-user.args';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

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
}
