import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsService } from './diamonds.service';
import { sampleData } from './diamonds.samples';

describe('DiamondsService', () => {
  let service: DiamondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsService],
    }).compile();

    service = module.get<DiamondsService>(DiamondsService);
  });

  describe('Diamond Hashing Service', () => {
    it('Should return 64 in case of input object is present', () => {
      expect(service.genHash(sampleData[0].input)).toHaveLength(64);
    });
    it('Should return false in case of empty input object is passed', () => {
      expect(service.genHash()).toBe(false);
    });
  });
});
