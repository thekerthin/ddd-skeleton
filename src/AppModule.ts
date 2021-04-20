import { Module } from '@nestjs/common';
import { getPrototypes } from '@kerthin/utils';

import { DBModule } from './shared/infra/database/DBModule';

const modules = getPrototypes(
  `${__dirname}/modules/**/*Module{.ts,.js}`,
);

@Module({
  imports: [DBModule, ...modules],
})
export class AppModule { }
