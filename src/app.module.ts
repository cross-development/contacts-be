// Packages
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// Modules
import { UserModule } from './domains/user/user.module';
import { AuthModule } from './domains/auth/auth.module';
import { ProfileModule } from './domains/profile/profile.module';
import { ContactModule } from './domains/contact/contact.module';
// Configs
import ormConfig from './configs/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormConfig.getTypeormConfig,
    }),
    ProfileModule,
    UserModule,
    ContactModule,
    AuthModule,
  ],
})
export class AppModule {}
