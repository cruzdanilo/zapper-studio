import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { Erc20 } from '~contract/contracts';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import { Network } from '~types';

@PositionTemplate()
export class FantomAbracadabraStakedSpellTokenFetcher extends AppTokenTemplatePositionFetcher<Erc20> {
  groupLabel = 'Staked SPELL';
  fromNetwork = Network.ETHEREUM_MAINNET;

  getContract(address: string) {
    return this.appToolkit.globalContracts.erc20({ address, network: this.network });
  }

  getAddresses() {
    return ['0xbb29d2a58d880af8aa5859e30470134deaf84f2b'];
  }

  async getUnderlyingTokenAddresses() {
    return ['0x26fa3fffb6efe8c1e69103acb4044c26b9a106a9'];
  }
}