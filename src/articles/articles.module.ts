import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesRepository } from './articles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArticlesRepository])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
