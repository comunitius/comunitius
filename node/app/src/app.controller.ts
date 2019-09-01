import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

interface INumVisitsResponse {
  numVisits: number;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get('/')
  public async getVisits(): Promise<INumVisitsResponse> {
    const numVisits = await this.appService.getVisits();

    return {
      numVisits: Number(numVisits)
    };
  }
}
