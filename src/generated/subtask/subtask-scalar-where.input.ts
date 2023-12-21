import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SubtaskScalarWhereInput {

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    AND?: Array<SubtaskScalarWhereInput>;

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    OR?: Array<SubtaskScalarWhereInput>;

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    NOT?: Array<SubtaskScalarWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    taskId?: StringFilter;
}
