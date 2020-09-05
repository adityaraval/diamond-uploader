import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

import { CreateDiamondDto } from './diamonds.dto'

@Injectable()
export class DiamondsService {

  genHash = (object?: CreateDiamondDto) => {
    if (object) {
      const hash = createHash('sha256');
      return hash.update(JSON.stringify(object)).digest("hex");
    } else {
      return false;
    }
  };
}
