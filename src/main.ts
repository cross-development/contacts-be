// Packages
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
// Modules
import { AppModule } from './app.module';
// Configs
import swaggerConfig from './configs/swagger.config';
// Pipes
import { BackendValidationPipe } from './shared/pipes/backend-validation.pipe';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new BackendValidationPipe());

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);

  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  await app.listen(port, () => console.log(`Server started listening on port ${port}`));
};

bootstrap();
