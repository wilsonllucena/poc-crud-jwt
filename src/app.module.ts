import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.DATABASE_PASS}@cluster0.p9cvk.mongodb.net/${process.env.DATABASE_NAME}`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
