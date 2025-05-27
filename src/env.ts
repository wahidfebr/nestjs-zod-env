import z from 'zod/v4';

export enum EAPP_ENV {
  LOCAL = 'local',
  TEST = 'test',
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

const envSchema = z.object({
  APP_NAME: z.string().trim().min(1),
  APP_ENV: z.enum(EAPP_ENV),
  APP_PORT: z.coerce.number().positive(),
  APP_HOST: z.ipv4(),

  MONGODB_URI: z.url().max(2048),

  SECRET: z.string().trim().min(1),
});

console.log('NODE_ENV => ', process.env.NODE_ENV);
console.log('APP_ENV => ', process.env.APP_ENV);

export default envSchema.parse(process.env);
