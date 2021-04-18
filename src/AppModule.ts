import { Module } from '@nestjs/common';
import { getPrototypes } from '@kerthin/utils';

const modules = getPrototypes(
  `${__dirname}/modules/**/*Module{.ts,.js}`,
);

@Module({
  imports: [...modules],
})
export class AppModule { }
