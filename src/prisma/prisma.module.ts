import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
// The Global decorator makes the PrismaService available globally
// in the application, so it doesn't need to be imported in every module.
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
