import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    priority?: number;
}
