import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubtasksInput } from './task-create-without-subtasks.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubtasksInput } from './task-create-or-connect-without-subtasks.input';
import { TaskUpsertWithoutSubtasksInput } from './task-upsert-without-subtasks.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateToOneWithWhereWithoutSubtasksInput } from './task-update-to-one-with-where-without-subtasks.input';

@InputType()
export class TaskUpdateOneRequiredWithoutSubtasksNestedInput {

    @Field(() => TaskCreateWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubtasksInput)
    create?: TaskCreateWithoutSubtasksInput;

    @Field(() => TaskCreateOrConnectWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubtasksInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput;

    @Field(() => TaskUpsertWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskUpsertWithoutSubtasksInput)
    upsert?: TaskUpsertWithoutSubtasksInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;

    @Field(() => TaskUpdateToOneWithWhereWithoutSubtasksInput, {nullable:true})
    @Type(() => TaskUpdateToOneWithWhereWithoutSubtasksInput)
    update?: TaskUpdateToOneWithWhereWithoutSubtasksInput;
}
