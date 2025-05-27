import z from 'zod/v4';

export enum EAPP_ENV {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

const envSchema = z.object({
  APP_ENV: z.enum(EAPP_ENV),
  APP_PORT: z.coerce.number().positive(),
  APP_HOST: z.ipv4(),

  MONGODB_URI: z.url().max(2048),
});

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  throw new Error(
    `INVALID ENV => ${JSON.stringify(z.treeifyError(error), null, 2)}`,
  );
}

export const env = data;
