import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubtasksInput } from './task-create-without-subtasks.input';

@InputType()
export class TaskCreateOrConnectWithoutSubtasksInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;

    @Field(() => TaskCreateWithoutSubtasksInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubtasksInput)
    create!: TaskCreateWithoutSubtasksInput;
}
