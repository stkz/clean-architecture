import { IsString, IsDate } from "class-validator";

export class CreateBookDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsString()
  publishedDate!: string;
}