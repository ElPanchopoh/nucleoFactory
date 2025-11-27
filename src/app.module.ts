import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',     
      username: 'root',       
      password: 'root',       
      database: 'notesdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotesModule,
  ],
})
export class AppModule {}
