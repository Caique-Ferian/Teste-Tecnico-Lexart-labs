import { ConfigService } from '@nestjs/config';
import configuration from './';

export class Envs {
  private static service = new ConfigService(configuration());

  public static appPort(): number {
    return Envs.service.get<number>('port');
  }
}
