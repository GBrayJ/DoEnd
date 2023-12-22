import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UserResolver } from './user/user.resolver';
import { TaskService } from './task/task.service';
import { TaskResolver } from './task/task.resolver';
import { SubtaskResolver } from './subtask/subtask.resolver';
import { SubtaskService } from './subtask/subtask.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [
    PrismaService,
    UserService,
    UserResolver,
    TaskService,
    TaskResolver,
    SubtaskResolver,
    SubtaskService,
  ],
})
export class AppModule {}
