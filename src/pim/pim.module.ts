import { Module } from '@nestjs/common';
import { PimService } from './pim.service';
import { PimController } from './pim.controller';

@Module({
  controllers: [PimController],
  providers: [PimService],
})
export class PimModule {}
