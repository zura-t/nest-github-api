import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';

@Module({
  imports: [HttpModule],
  providers: [CommitsService],
  controllers: [CommitsController]
})
export class CommitsModule {}
