import { NotFoundException } from '@nestjs/common';
import { BaseEntity, DeleteResult, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { IBaseService } from './base.interface';

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements IBaseService<T>
{
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findById(id: EntityId): Promise<T> {
    const result = await this.repository.findOne(id);
    if (!result) throw new NotFoundException();
    return result;
  }

  async findByIds(ids: [EntityId]): Promise<T[]> {
    return await this.repository.findByIds(ids);
  }

  async create(data: any): Promise<T> {
    return await this.repository.save(data);
  }

  async update(id: EntityId, data: any): Promise<T> {
    await this.repository.update(id, data);
    return await this.findById(id);
  }

  async remove(id: EntityId): Promise<DeleteResult> {
    const result = await this.repository.findOne(id);
    if (!result) throw new NotFoundException();
    return await this.repository.delete(id);
  }
}
