import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubtaskCountOrderByAggregateInput } from './subtask-count-order-by-aggregate.input';
import { SubtaskMaxOrderByAggregateInput } from './subtask-max-order-by-aggregate.input';
import { SubtaskMinOrderByAggregateInput } from './subtask-min-order-by-aggregate.input';

@InputType()
export class SubtaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SubtaskCountOrderByAggregateInput, {nullable:true})
    _count?: SubtaskCountOrderByAggregateInput;

    @Field(() => SubtaskMaxOrderByAggregateInput, {nullable:true})
    _max?: SubtaskMaxOrderByAggregateInput;

    @Field(() => SubtaskMinOrderByAggregateInput, {nullable:true})
    _min?: SubtaskMinOrderByAggregateInput;
}
