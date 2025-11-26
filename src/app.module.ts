import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',      // ❗ Importante: localhost
      port: 3306,
      username: 'root',       // o 'nest'
      password: 'root',       // o 'nest'
      database: 'notesdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotesModule,
  ],
})
export class AppModule {}
