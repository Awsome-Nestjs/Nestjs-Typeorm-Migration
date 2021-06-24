import { IsNotEmpty, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateArticleDto {
  @MaxLength(1000)
  @MinLength(1)
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsUUID('all', { each: true })
  author: number;
}
