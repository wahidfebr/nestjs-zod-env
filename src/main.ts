import { env } from './env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.info(
      `$[${env.APP_ENV}] running at http://${env.APP_HOST}:${env.APP_PORT}`,
    );
  });
}
void bootstrap();
