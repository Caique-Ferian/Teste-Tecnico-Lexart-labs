import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Envs } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://localhost:3000',
      'https://market-products-search-frontend.up.railway.app/',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
