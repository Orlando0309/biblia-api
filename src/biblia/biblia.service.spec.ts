import { Test, TestingModule } from '@nestjs/testing';
import { BibliaService } from './biblia.service';

describe('BibliaService', () => {
  let service: BibliaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibliaService],
    }).compile();

    service = module.get<BibliaService>(BibliaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
