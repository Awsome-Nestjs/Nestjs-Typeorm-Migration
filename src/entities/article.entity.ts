import { Status } from 'src/common/enums/status.enum';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('articles')
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.articles)
  author: User;

  @Column({ default: false })
  isPublished: boolean;

  @Column({ default: Status.Pending })
  status: number;

  @Column('text')
  content: string;
}
