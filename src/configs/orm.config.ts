// Packages
import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const config = {
  getTypeormConfig: (configService: ConfigService): DataSourceOptions => ({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: Number(configService.get('POSTGRES_PORT')),
    database: configService.get('POSTGRES_DATABASE'),
    username: configService.get('POSTGRES_USERNAME'),
    password: configService.get('POSTGRES_PASSWORD'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    synchronize: false,
    //   cli: {
    //     migrationsDir: 'src/migrations',
    //   },
  }),
};

export default config;
