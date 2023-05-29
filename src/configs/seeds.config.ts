// Packages
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// Configs
import ormConfig from './orm.config';

const config = {
  getSeedsConfig: (): PostgresConnectionOptions => ({
    ...ormConfig.getTypeormConfig(),
    migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
  }),
};

export default config;
