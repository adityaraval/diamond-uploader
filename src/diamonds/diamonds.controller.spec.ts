import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { DiamondsController } from './diamonds.controller';
import { DiamondsService } from './diamonds.service';
import * as request from 'supertest';
import { validData, invalidData } from './diamonds.samples'

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
        .send(validData[0].input)
        .expect(HttpStatus.CREATED)
    });
    it(`Expecting output to be same as provided while passing valid diamond object`, () => {
      return request(app.getHttpServer())
        .post('/diamonds')
        .send(validData[0].input)
        .expect(validData[0].output);
    });

    it(`Expecting length of hash should be 64 while passing valid diamond object`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(validData[0].input);
      expect(res.text.length).toBe(64);
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when request body doesn't contain field - color`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[0].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("color is required & should not be null");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when request body doesn't contain field - cut`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[1].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("cut is required & should not be null");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when request body doesn't contain field - clarity`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[2].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("clarity is required & should not be null");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when request body doesn't contain field - caratWeight`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[3].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("caratWeight is required & should not be null");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when color field is empty or doesn't match minimum length`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[4].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("color must be longer than or equal to 1 characters");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when cut field is empty or doesn't match minimum length`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[5].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("cut must be longer than or equal to 1 characters");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when clarity field is empty or doesn't match minimum length`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[6].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("clarity must be longer than or equal to 3 characters");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when color field doesn't match maximum length`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[7].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("color must be shorter than or equal to 1 characters");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when cut field doesn't match maximum length`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[8].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("cut must be shorter than or equal to 2 characters");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when clarity doesn't match maximum length`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[9].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("clarity must be shorter than or equal to 3 characters");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when color field contains wrong data type`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[10].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("color must be string");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when cut field contains wrong data type`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[11].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("cut must be string");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when clarity field contains wrong data type`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[12].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("clarity must be string");
    });

    it(`Expecting status code to be ${HttpStatus.BAD_REQUEST} when caratWeight field contains wrong data type`, async () => {
      const res = await request(app.getHttpServer())
        .post('/diamonds')
        .send(invalidData[13].input)
      expect(res.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(res.body.message).toContain("caratWeight must be a number conforming to the specified constraints");
    });
  });
});