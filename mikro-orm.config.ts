import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default {
  type: 'postgresql',
  dbName: 'ddd_skeleton',
  user: 'root',
  password: 'password',
  metadataProvider: TsMorphMetadataProvider,
  baseDir: process.cwd(),
  cache: {
    enabled: true,
    pretty: false,
    options: { cacheDir: './.mikro_orm_cache' },
  },
  entities: [
    './dist/modules/user/domain/User.js',
    './dist/shared/domain/AggregateRoot.js',
    './dist/shared/domain/Entity.js',
  ],
  entitiesTs: [
    './src/modules/user/domain/User.ts',
    './src/shared/domain/AggregateRoot.ts',
    './src/shared/domain/Entity.ts',
  ],
} as MikroOrmModuleSyncOptions;
