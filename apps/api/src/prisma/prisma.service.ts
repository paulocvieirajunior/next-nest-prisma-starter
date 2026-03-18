import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@orbital/db';

@Injectable()
export class PrismaService extends PrismaClient {}
