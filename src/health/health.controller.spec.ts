import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import * as request from 'supertest';
describe('HealthController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule],
      controllers: [HealthController],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.enableShutdownHooks();
    await app.init();
  });

  describe('Health Check Service', () => {
    it('Health check should return status ok in case of service is up', () => {
      return request(app.getHttpServer())
        .get('/health')
        .expect(HttpStatus.OK);
    });
  });
});
