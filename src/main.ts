import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: ['http://localhost:3000'], 
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, 
  // });

 app.enableCors();

  await app.listen(PORT);
}
bootstrap();
