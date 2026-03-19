import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../../../.env') });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
