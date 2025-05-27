import { BadRequestException, Injectable } from '@nestjs/common';
import env, { EAPP_ENV } from './env';
import { UserSchema } from './app.validation';
import { z } from 'zod/v4';

@Injectable()
export class AppService {
  getHello(): string {
    if (env.APP_ENV !== EAPP_ENV.PRODUCTION) {
      console.log('doing something...🏃💨');
    }

    return `[${env.APP_ENV}] Hello World!`;
  }

  sayHello(body: unknown): string {
    const validated = UserSchema.safeParse(body);
    if (!validated.success) {
      throw new BadRequestException(
        /** don't response verbose error on an actual app */ JSON.stringify(
          z.treeifyError(validated.error),
        ),
      );
    }

    if (validated.data.secret === env.SECRET)
      return `BIG HAMBWUAGAAAAAA 🍔🍔🍔`;

    return `Hello ${validated.data.name}`;
  }
}
