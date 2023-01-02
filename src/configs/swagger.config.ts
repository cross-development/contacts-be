// Packages
import { DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
  .setTitle('Contacts manager')
  .setDescription('REST API Documentation')
  .setVersion('1.0.0')
  .build();

export default config;
