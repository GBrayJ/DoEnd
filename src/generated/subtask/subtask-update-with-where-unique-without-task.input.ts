import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubtaskWhereUniqueInput } from './subtask-where-unique.input';
import { Type } from 'class-transformer';
import { SubtaskUpdateWithoutTaskInput } from './subtask-update-without-task.input';

@InputType()
export class SubtaskUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => SubtaskWhereUniqueInput, {nullable:false})
    @Type(() => SubtaskWhereUniqueInput)
    where!: Prisma.AtLeast<SubtaskWhereUniqueInput, 'id'>;

    @Field(() => SubtaskUpdateWithoutTaskInput, {nullable:false})
    @Type(() => SubtaskUpdateWithoutTaskInput)
    data!: SubtaskUpdateWithoutTaskInput;
}
