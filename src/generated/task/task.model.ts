import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subtask } from '../subtask/subtask.model';
import { User } from '../user/user.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    completed!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    dueAt!: Date | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    priority!: number | null;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [Subtask], {nullable:true})
    subtasks?: Array<Subtask>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
