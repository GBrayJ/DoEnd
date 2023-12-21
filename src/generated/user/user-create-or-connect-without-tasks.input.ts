import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTasksInput } from './user-create-without-tasks.input';

@InputType()
export class UserCreateOrConnectWithoutTasksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutTasksInput)
    create!: UserCreateWithoutTasksInput;
}
