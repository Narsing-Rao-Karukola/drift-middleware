import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PimModule } from './pim/pim.module';

@Module({
  imports: [PimModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
