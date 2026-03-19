import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateUserDTO) {
    await this.db.client.user.create({ data });
  }
}
