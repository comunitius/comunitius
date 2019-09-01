import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { requestLogger } from './request-logger.middleware copy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(requestLogger);
  app.setGlobalPrefix('api');
  await app.listen(8000);
}
bootstrap();
