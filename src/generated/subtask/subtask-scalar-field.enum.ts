import { registerEnumType } from '@nestjs/graphql';

export enum SubtaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    completed = "completed",
    createdAt = "createdAt",
    taskId = "taskId"
}


registerEnumType(SubtaskScalarFieldEnum, { name: 'SubtaskScalarFieldEnum', description: undefined })
