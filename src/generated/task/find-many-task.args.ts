import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';
import { TaskOrderByWithRelationInput } from './task-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskScalarFieldEnum } from './task-scalar-field.enum';

@ArgsType()
export class FindManyTaskArgs {

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    where?: TaskWhereInput;

    @Field(() => [TaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskOrderByWithRelationInput>;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TaskScalarFieldEnum>;
}
