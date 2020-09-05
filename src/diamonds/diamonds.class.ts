import { ApiProperty } from '@nestjs/swagger';

export class Diamonds {
  @ApiProperty({ example: 'G', description: 'The color of the Diamond' })
  color: string;

  @ApiProperty({ example: 'GD', description: 'The cut of the Diamond' })
  cut: string;

  @ApiProperty({ example: 'VS1', description: 'The clarity of the Diamond' })
  clarity: string;

  @ApiProperty({ example: 0.8, description: 'The caratWeight of the Diamond' })
  caratWeight: number;

}