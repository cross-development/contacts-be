// Packages
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// Modules
import { UserModule } from './domains/user/user.module';
import { AuthModule } from './domains/auth/auth.module';
import { ContactModule } from './domains/contact/contact.module';
// Configs
import ormConfig from './configs/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env`, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormConfig.getTypeormConfig,
    }),
    UserModule,
    ContactModule,
    AuthModule,
  ],
})
export class AppModule {}
