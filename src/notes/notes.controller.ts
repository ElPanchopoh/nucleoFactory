import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';

@ApiTags('notes')
@Controller('api/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Nota creada' })
  create(@Body() dto: CreateNoteDto) {
    return this.notesService.create(dto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Listado de notas' })
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Detalle de nota' })
  findOne(@Param('id') id: number) {
    return this.notesService.findOne(+id);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Nota eliminada' })
  delete(@Param('id') id: number) {
    return this.notesService.remove(+id);
  }
}
