import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { User } from 'src/entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService extends BaseService<User, UserRepository> {
  constructor(private usersRepository: UserRepository) {
    super(usersRepository);
  }
}
