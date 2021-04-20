import { Module } from '@nestjs/common';
import { getPrototypes, getPrototypesForDI } from '@kerthin/utils';

const routes = getPrototypes(
  `${__dirname}/infra/http/routes/*{.ts,.js}`,
);

const useCases = getPrototypes(
  `${__dirname}/use_cases/**/*UseCase{.ts,.js}`
);

const repositories = getPrototypesForDI(
  `${__dirname}/repositories/**/*RepositoryImpl{.ts,.js}`
);

@Module({
  controllers: [...routes],
  providers: [...useCases, ...repositories],
})
export class UserModule { }
