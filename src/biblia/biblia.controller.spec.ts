import { Test, TestingModule } from '@nestjs/testing';
import { BibliaController } from './biblia.controller';

describe('BibliaController', () => {
  let controller: BibliaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibliaController],
    }).compile();

    controller = module.get<BibliaController>(BibliaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
