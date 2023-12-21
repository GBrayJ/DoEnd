import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SubtaskScalarWhereWithAggregatesInput {

    @Field(() => [SubtaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubtaskScalarWhereWithAggregatesInput>;

    @Field(() => [SubtaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubtaskScalarWhereWithAggregatesInput>;

    @Field(() => [SubtaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubtaskScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    taskId?: StringWithAggregatesFilter;
}
