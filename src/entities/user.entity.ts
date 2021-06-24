import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from './article.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: number;

  @Column({ length: 200 })
  email: string;

  @Column({ length: 200, nullable: true })
  name: string;

  @Column({ default: false })
  active: boolean;

  @Column({ type: 'simple-array', default: ['member'] })
  roles: string[];

  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];
}
