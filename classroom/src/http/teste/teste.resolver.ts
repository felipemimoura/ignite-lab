import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from '../auth/authorization.guard';

@Resolver('teste')
export class TesteResolver {
  constructor(private prisma: PrismaService) {}
  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return this.prisma.student.findMany();
  }
}
