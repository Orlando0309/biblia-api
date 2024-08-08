import { Module } from '@nestjs/common';
import { BibliaController } from './biblia.controller';
import { BibliaService } from './biblia.service';

@Module({
  controllers: [BibliaController],
  providers: [BibliaService],
})
export class BibliaModule {}
