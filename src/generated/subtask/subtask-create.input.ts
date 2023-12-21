import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutSubtasksInput } from '../task/task-create-nested-one-without-subtasks.input';

@InputType()
export class SubtaskCreateInput {

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

    @Field(() => TaskCreateNestedOneWithoutSubtasksInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutSubtasksInput;
}
