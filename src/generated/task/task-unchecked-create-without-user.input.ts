import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskCreatetagsInput } from './task-createtags.input';
import { SubtaskUncheckedCreateNestedManyWithoutTaskInput } from '../subtask/subtask-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    dueAt?: Date | string;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => TaskCreatetagsInput, {nullable:true})
    tags?: TaskCreatetagsInput;

    @Field(() => SubtaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput;
}