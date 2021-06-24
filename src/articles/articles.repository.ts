import { Article } from 'src/entities/article.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Article)
export class ArticlesRepository extends Repository<Article> {}
