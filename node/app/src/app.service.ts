import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import * as Redis from 'ioredis';

@Injectable()
export class AppService {
  private redisClient: Redis.Redis;

  constructor(
    private readonly redisService: RedisService,
  ) {
    this.redisClient = this.redisService.getClient();
    this.redisClient.set('visits', 0);
  }

  public async getVisits(): Promise<number> {
    this.redisClient.incr('visits');
    const numVisits = await this.redisClient.get('visits');

    return Number(numVisits);
  }
}
