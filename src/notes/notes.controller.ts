import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('api/notes') // ← IMPORTANTE
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() dto: CreateNoteDto) {
    return this.notesService.create(dto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.notesService.findOne(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.notesService.remove(+id);
  }
}
