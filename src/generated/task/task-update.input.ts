import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { TaskUpdatetagsInput } from './task-updatetags.input';
import { SubtaskUpdateManyWithoutTaskNestedInput } from '../subtask/subtask-update-many-without-task-nested.input';
import { UserUpdateOneRequiredWithoutTasksNestedInput } from '../user/user-update-one-required-without-tasks-nested.input';

@InputType()
export class TaskUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    completed?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dueAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priority?: NullableIntFieldUpdateOperationsInput;

    @Field(() => TaskUpdatetagsInput, {nullable:true})
    tags?: TaskUpdatetagsInput;

    @Field(() => SubtaskUpdateManyWithoutTaskNestedInput, {nullable:true})
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutTasksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutTasksNestedInput;
}