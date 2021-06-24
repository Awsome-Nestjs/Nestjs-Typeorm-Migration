import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() article: CreateArticleDto) {
    return await this.articlesService.create(article);
  }

  @Get()
  async showAll() {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  async show(@Param() param) {
    const id = param.id;
    return await this.articlesService.findById(id);
  }

  @Put(':id')
  async update(@Body() article: UpdateArticleDto, @Param() param) {
    const id = param.id;
    return await this.articlesService.update(id, article);
  }

  @Delete(':id')
  async delete(@Param() param) {
    const id = param.id;
    await this.articlesService.remove(id);
    return {
      messages: 'Success',
    };
  }
}
