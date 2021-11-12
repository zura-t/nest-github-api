import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  
  constructor(private readonly commitsService: CommitsService) {}

  @Get(':branch')
  async getCommits(@Param('branch') branch: string): Promise<any> {
    return await this.commitsService.getAll(branch)
  }

  @Get('/messages/:branch')
  async getCommitsMessages(@Param('branch') branch: string): Promise<any> {
    return await this.commitsService.getCommitMessages(branch)
  }

  @Get('/hashes/:branch')
  getCommitsHashes(@Param('branch') branch: string): Promise<any> {
    return this.commitsService.getCommitHashes(branch)
  }
}
