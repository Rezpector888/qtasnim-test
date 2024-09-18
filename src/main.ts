import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Qtasnim test')
    .setDescription('list API for Qtasnim')
    .setVersion('1.0')
    .build();

  const swaggerOptions: SwaggerCustomOptions = {
    explorer: true,
  };

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument, swaggerOptions);
  await app.listen(3000);
}
bootstrap();
