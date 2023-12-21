import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class TaskScalarWhereInput {

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    AND?: Array<TaskScalarWhereInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    OR?: Array<TaskScalarWhereInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    NOT?: Array<TaskScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    priority?: IntNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
