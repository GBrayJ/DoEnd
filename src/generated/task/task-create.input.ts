import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskCreatetagsInput } from './task-createtags.input';
import { SubtaskCreateNestedManyWithoutTaskInput } from '../subtask/subtask-create-nested-many-without-task.input';
import { UserCreateNestedOneWithoutTasksInput } from '../user/user-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateInput {

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

    @Field(() => SubtaskCreateNestedManyWithoutTaskInput, {nullable:true})
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput;

    @Field(() => UserCreateNestedOneWithoutTasksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTasksInput;
}
