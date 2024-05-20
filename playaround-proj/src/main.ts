import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The NestFactory class is the entry file of the Nest application.
// bootstrap is an asynchronous function that initializes the Nest application.
async function bootstrap() {
  // The create() method creates a new instance of the Nest application.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
