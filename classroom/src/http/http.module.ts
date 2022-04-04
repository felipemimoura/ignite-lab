import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path/win32';
import { DatabaseModule } from 'src/database/database.module';
import { TesteResolver } from './teste/teste.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gl'),
    }),
  ], // Permite utilizar o process.env,
  providers: [TesteResolver],
})
export class HttpModule {}
