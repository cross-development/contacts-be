// Packages
import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
// Configs
import ormConfig from './orm.config';

const config = {
  getSeedsConfig: (configService: ConfigService): DataSourceOptions => ({
    ...ormConfig.getTypeormConfig(configService),
    migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
    //   cli: {
    //     migrationsDir: 'src/migrations',
    //   },
  }),
};

export default config;
