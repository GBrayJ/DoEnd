import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Type } from 'class-transformer';
import { SubtaskCreateWithoutTaskInput } from './subtask-create-without-task.input';

@InputType()
export class SubtaskCreateOrConnectWithoutTaskInput {

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: Prisma.AtLeast<SubtaskWhereUniqueInput, 'id'>;

    @Field(() => SubtaskCreateWithoutTaskInput, {nullable:false})
    @Type(() => SubtaskCreateWithoutTaskInput)
    create!: SubtaskCreateWithoutTaskInput;
}
