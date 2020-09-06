import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { DiamondsModule } from './diamonds/diamonds.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [TerminusModule, DiamondsModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule { }
