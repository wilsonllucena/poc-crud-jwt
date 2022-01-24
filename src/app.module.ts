import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.DATABASE_PASS}@cluster0.p9cvk.mongodb.net/${process.env.DATABASE_NAME}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
