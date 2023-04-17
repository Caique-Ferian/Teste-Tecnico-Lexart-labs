import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Envs } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  await app.listen(Envs.appPort() || 3001);
}
bootstrap();
