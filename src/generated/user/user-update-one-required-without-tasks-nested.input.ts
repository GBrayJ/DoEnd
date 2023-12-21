import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTasksInput } from './user-create-without-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTasksInput } from './user-create-or-connect-without-tasks.input';
import { UserUpsertWithoutTasksInput } from './user-upsert-without-tasks.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutTasksInput } from './user-update-to-one-with-where-without-tasks.input';

@InputType()
export class UserUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => UserCreateWithoutTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutTasksInput)
    create?: UserCreateWithoutTasksInput;

    @Field(() => UserCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput;

    @Field(() => UserUpsertWithoutTasksInput, {nullable:true})
    @Type(() => UserUpsertWithoutTasksInput)
    upsert?: UserUpsertWithoutTasksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTasksInput)
    update?: UserUpdateToOneWithWhereWithoutTasksInput;
}
