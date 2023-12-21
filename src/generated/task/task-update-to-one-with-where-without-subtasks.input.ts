import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutSubtasksInput } from './task-update-without-subtasks.input';

@InputType()
export class TaskUpdateToOneWithWhereWithoutSubtasksInput {

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    where?: TaskWhereInput;

    @Field(() => TaskUpdateWithoutSubtasksInput, {nullable:false})
    @Type(() => TaskUpdateWithoutSubtasksInput)
    data!: TaskUpdateWithoutSubtasksInput;
}
