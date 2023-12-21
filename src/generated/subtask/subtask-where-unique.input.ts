import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskWhereInput } from './subtask-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class SubtaskWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    AND?: Array<SubtaskWhereInput>;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    OR?: Array<SubtaskWhereInput>;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    NOT?: Array<SubtaskWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    taskId?: StringFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;
}
