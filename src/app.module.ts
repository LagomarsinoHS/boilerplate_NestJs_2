import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoProvider } from './database/mongo.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo de configuración sea global
    }),
    MongoProvider,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
