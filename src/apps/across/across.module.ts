import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { AcrossContractFactory } from './contracts';
import { EthereumAcrossV1PoolTokenFetcher } from './ethereum/across.v1-pool.token-fetcher';
import { EthereumAcrossV2PoolTokenFetcher } from './ethereum/across.v2-pool.token-fetcher';

@Module({
  providers: [AcrossContractFactory, EthereumAcrossV1PoolTokenFetcher, EthereumAcrossV2PoolTokenFetcher],
})
export class AcrossAppModule extends AbstractApp() {}
