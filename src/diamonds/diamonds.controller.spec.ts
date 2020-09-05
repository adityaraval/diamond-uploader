import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { DiamondsController } from './diamonds.controller';
import { DiamondsService } from './diamonds.service';
import * as request from 'supertest';
import { sampleData } from './diamonds.samples'

describe('DiamondsController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiamondsController],
      providers: [DiamondsService],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.enableShutdownHooks();
    await app.init();
  });

  describe('-----Diamond Controller-----', () => {
    it(`Expecting status code to be ${HttpStatus.OK} while passing valid diamond object`, () => {
      return request(app.getHttpServer())
        .post('/diamonds')
        .send(sampleData[0].input)
        .expect(HttpStatus.CREATED)
    });
    it(`Expecting output to be same as provided while passing valid diamond object`, () => {
      return request(app.getHttpServer())
        .post('/diamonds')
        .send(sampleData[0].input)
        .expect(sampleData[0].output);
    });

    it(`Expecting length of hash should be 64 while passing valid diamond object`, async () => {
      const res =  await request(app.getHttpServer())
        .post('/diamonds')
        .send(sampleData[0].input);
      expect(res.text.length).toBe(64);
    });
  });
});