import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.DATABASE_PASS}@cluster0.p9cvk.mongodb.net/${process.env.DATABASE_NAME}`,
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
