import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtaskWhereInput } from './subtask-where.input';
import { Type } from 'class-transformer';
import { SubtaskOrderByWithRelationInput } from './subtask-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubtaskScalarFieldEnum } from './subtask-scalar-field.enum';

@ArgsType()
export class FindFirstSubtaskOrThrowArgs {

    @Field(() => SubtaskWhereInput, {nullable:true})
    @Type(() => SubtaskWhereInput)
    where?: SubtaskWhereInput;

    @Field(() => [SubtaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubtaskOrderByWithRelationInput>;

    @Field(() => SubtaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubtaskWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubtaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubtaskScalarFieldEnum>;
}
