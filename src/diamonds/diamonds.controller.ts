import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { DiamondsService } from './diamonds.service'
import { CreateDiamondDto } from './diamonds.dto'

@ApiTags('diamonds')
@Controller('diamonds')
export class DiamondsController {
  constructor(private diamondsService: DiamondsService) { }

  @Post()
  @ApiOperation({ summary: 'Create Diamond' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'hash of the diamond' })
  async upload(
    @Body() diamondObject?: CreateDiamondDto,
    @Res() res?: Response,
  ) {
    const hash = this.diamondsService.genHash(diamondObject);
    res.status(HttpStatus.CREATED).send(hash);
  };
}