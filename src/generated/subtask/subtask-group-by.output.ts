import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubtaskCountAggregate } from './subtask-count-aggregate.output';
import { SubtaskMinAggregate } from './subtask-min-aggregate.output';
import { SubtaskMaxAggregate } from './subtask-max-aggregate.output';

@ObjectType()
export class SubtaskGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    completed!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    taskId!: string;

    @Field(() => SubtaskCountAggregate, {nullable:true})
    _count?: SubtaskCountAggregate;

    @Field(() => SubtaskMinAggregate, {nullable:true})
    _min?: SubtaskMinAggregate;

    @Field(() => SubtaskMaxAggregate, {nullable:true})
    _max?: SubtaskMaxAggregate;
}
