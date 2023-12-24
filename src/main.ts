import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsConfig = {
  origin: true, // allow all origins
  methods: 'POST', // only allow POST requests (Using GraphQL, all requests are POST)
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig);
  await app.listen(3000);
}
bootstrap();
