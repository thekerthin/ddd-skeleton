import { Module } from '@nestjs/common';
import { getPrototypes } from '@kerthin/utils';

const routes = getPrototypes(
  `${__dirname}/infra/http/routes/*{.ts,.js}`,
);

const useCases = getPrototypes(
  `${__dirname}/use_cases/**/*UseCase{.ts,.js}`
);

@Module({
  controllers: [...routes],
  providers: [...useCases],
})
export class UserModule { }
