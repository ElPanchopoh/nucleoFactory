import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsOptional()
  content?: string;
}

