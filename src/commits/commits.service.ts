import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class CommitsService {

  constructor(private httpService: HttpService) {}

  async getAll(branch): Promise<any> {
    const data = await this.httpService.get(`https://api.github.com/repos/nodejs/node/commits?sha=${branch}`).pipe(map(res => res.data.slice(0, 25)))
    
    return data
  }

  async getCommitMessages(branch): Promise<any> {
    const data = await this.httpService.get(`https://api.github.com/repos/nodejs/node/commits?sha=${branch}`)
    .pipe(map(res => res.data.slice(0, 25).map(item => item.commit.message)))
    
    return data
  }

  async getCommitHashes(branch): Promise<any> {
    const data = await this.httpService.get(`https://api.github.com/repos/nodejs/node/commits?sha=${branch}`)
    .pipe(map(res => res.data.slice(0, 25).map(item => item.sha)))
    
    return data
  }
}
