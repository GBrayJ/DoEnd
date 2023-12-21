import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTasksInput } from './user-update-without-tasks.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutTasksInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutTasksInput, {nullable:false})
    @Type(() => UserUpdateWithoutTasksInput)
    data!: UserUpdateWithoutTasksInput;
}
