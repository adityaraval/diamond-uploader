import { Module } from '@nestjs/common';
import { DiamondsController } from './diamonds.controller';
import { DiamondsService } from './diamonds.service';

@Module({
  controllers: [DiamondsController],
  providers: [DiamondsService]
})
export class DiamondsModule {}
