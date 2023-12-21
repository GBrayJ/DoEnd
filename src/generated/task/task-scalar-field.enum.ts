import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    completed = "completed",
    createdAt = "createdAt",
    dueAt = "dueAt",
    priority = "priority",
    tags = "tags",
    userId = "userId"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
