import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  create(note: Partial<Note>) {
    const newNote = this.notesRepository.create(note);
    return this.notesRepository.save(newNote);
  }

  findAll() {
    return this.notesRepository.find();
  }

  findOne(id: number) {
    return this.notesRepository.findOne({ where: { id } });
  }

  update(id: number, data: Partial<Note>) {
    return this.notesRepository.update(id, data);
  }

  remove(id: number) {
    return this.notesRepository.delete(id);
  }
}
