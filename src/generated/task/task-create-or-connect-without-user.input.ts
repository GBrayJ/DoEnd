import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutUserInput } from './task-create-without-user.input';

@InputType()
export class TaskCreateOrConnectWithoutUserInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;

    @Field(() => TaskCreateWithoutUserInput, {nullable:false})
    @Type(() => TaskCreateWithoutUserInput)
    create!: TaskCreateWithoutUserInput;
}
