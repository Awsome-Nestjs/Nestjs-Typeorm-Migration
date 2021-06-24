import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Article } from 'src/entities/article.entity';
import { ArticlesRepository } from './articles.repository';

@Injectable()
export class ArticlesService extends BaseService<Article, ArticlesRepository> {
  constructor(private articleRepository: ArticlesRepository) {
    super(articleRepository);
  }
}
