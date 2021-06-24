import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.usersService.create(user);
  }

  @Get()
  async showAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async show(@Param() param) {
    const id = param.id;
    return await this.usersService.findById(id);
  }

  @Put(':id')
  async update(@Body() user: UpdateUserDto, @Param() param) {
    const id = param.id;
    return await this.usersService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param() param) {
    const id = param.id;
    await this.usersService.remove(id);
    return {
      messages: 'Success',
    };
  }
}
