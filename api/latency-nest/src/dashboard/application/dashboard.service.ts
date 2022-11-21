import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  async execute(): Promise<string> {
    return 'Dashboard Service';
  }
}
