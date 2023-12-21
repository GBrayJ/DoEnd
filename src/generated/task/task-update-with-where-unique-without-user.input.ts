import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutUserInput } from './task-update-without-user.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;

    @Field(() => TaskUpdateWithoutUserInput, {nullable:false})
    @Type(() => TaskUpdateWithoutUserInput)
    data!: TaskUpdateWithoutUserInput;
}
