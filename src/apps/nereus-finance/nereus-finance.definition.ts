import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const NEREUS_FINANCE_DEFINITION = appDefinition({
  id: 'nereus-finance',
  name: 'Nereus Finance',
  description:
    'Nereus is a decentralised, non-custodial liquidity market protocol in which users can participate as depositors or borrowers.',
  url: 'https://nereus.finance/',

  groups: {
    supply: {
      id: 'supply',
      type: GroupType.TOKEN,
      label: 'Lending',
      groupLabel: 'Supply',
    },

    stableDebt: {
      id: 'stable-debt',
      type: GroupType.TOKEN,
      label: 'Lending',
      groupLabel: 'Borrow',
    },

    variableDebt: {
      id: 'variable-debt',
      type: GroupType.TOKEN,
      label: 'Lending',
      groupLabel: 'Borrow',
    },

    claimable: {
      id: 'claimable',
      type: GroupType.TOKEN,
      label: 'Reward',
      isHiddenFromExplore: true,
    },
  },
  tags: [AppTag.LENDING],

  links: {
    twitter: 'https://twitter.com/nereusfinance',
    discord: 'https://discord.gg/4tw3VsuTf9',
    medium: 'https://medium.com/nereus-protocol',
  },

  token: {
    address: '0xfcDe4A87b8b6FA58326BB462882f1778158B02F1',
    network: Network.AVALANCHE_MAINNET,
  },

  supportedNetworks: {
    [Network.AVALANCHE_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#4D4AEC',
});

@Register.AppDefinition(NEREUS_FINANCE_DEFINITION.id)
export class NereusFinanceAppDefinition extends AppDefinition {
  constructor() {
    super(NEREUS_FINANCE_DEFINITION);
  }
}

export default NEREUS_FINANCE_DEFINITION;