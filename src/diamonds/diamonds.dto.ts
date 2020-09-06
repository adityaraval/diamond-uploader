import { IsString, IsNotEmpty, IsNumber, MinLength, MaxLength } from 'class-validator';

export class CreateDiamondDto {
  @IsString({
    message: "color must be string"
  })
  @IsNotEmpty({
    message: "color is required & should not be null"
  })
  @MinLength(1)
  @MaxLength(1)
  color: string;

  @IsString({
    message: "cut must be string"
  })
  @IsNotEmpty({
    message: "cut is required & should not be null"
  })
  @MinLength(1)
  @MaxLength(2)
  cut: string;

  @IsString({
    message: "clarity must be string"
  })
  @IsNotEmpty({
    message: "clarity is required & should not be null"
  })
  @MinLength(3)
  @MaxLength(3)
  clarity: string;

  @IsNumber()
  @IsNotEmpty({
    message: "caratWeight is required & should not be null"
  })
  caratWeight: number;
}