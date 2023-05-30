// Packages
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// Modules
import { UserModule } from './domains/user/user.module';
import { AuthModule } from './domains/auth/auth.module';
import { ContactModule } from './domains/contact/contact.module';
// Configs
import { ormConfig } from './configs/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env`, isGlobal: true }),
    TypeOrmModule.forRoot({ ...ormConfig, autoLoadEntities: true }),
    UserModule,
    ContactModule,
    AuthModule,
  ],
})
export class AppModule {}
