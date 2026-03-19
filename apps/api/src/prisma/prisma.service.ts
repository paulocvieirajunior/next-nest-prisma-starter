import { Injectable } from '@nestjs/common';
import { prisma } from '@orbital/db';

@Injectable()
export class PrismaService {
  client = prisma;
}
