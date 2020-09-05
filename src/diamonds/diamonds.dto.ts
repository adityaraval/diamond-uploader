import { IsString, IsNotEmpty, IsNumber, MinLength, MaxLength } from 'class-validator';

export class CreateDiamondDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1)
  color: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(2)
  cut: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(3)
  clarity: string;

  @IsNumber()
  @IsNotEmpty()
  caratWeight: number;
}