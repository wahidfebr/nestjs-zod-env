To be safe only store and inject .env file on cicd pipeline.

This way you got global env config with single source of truth that can be used anywhere in you apps and its already typesafe 🚀

We don't use dotenv here since node >= 20 can read env file using --env-file config, If you use node < 20 simply install dotenv and import it on env.ts