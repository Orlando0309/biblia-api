import { Controller, Get, Param } from '@nestjs/common';
import { BibliaService } from './biblia.service';
import { boky } from './boky';

@Controller('biblia')
export class BibliaController {
  constructor(private readonly bibliaService: BibliaService) {}

  @Get('books')
  getBoky() {
    return boky;
  }

  @Get('v1/:testament/:book/:chapter/:range')
  getVerse(
    @Param('testament') testament: 'taloha' | 'vaovao',
    @Param('book') book: string,
    @Param('chapter') chapter: number,
    @Param('range') range: string,
  ) {
    const [start, end] = range.split('-').map(Number);
    return this.bibliaService.getVerse(testament, book, chapter, start, end);
  }
}
