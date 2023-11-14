import { CosmosDatasourceKind, CosmosHandlerKind, CosmosProject } from '@subql/types-cosmos'

// Can expand the Datasource processor types via the genreic param
const project: CosmosProject = {
  specVersion: '1.0.0',
  version: '0.0.1',
  name: 'coreum',
  description: 'Coreum blockchain indexer',
  runner: {
    node: {
      name: '@subql/node-cosmos',
      version: '>=3.0.0',
      options: { unsafe: true },
    },
    query: {
      name: '@subql/query',
      version: '*',
    },
  },
  schema: {
    file: './schema.graphql',
  },
  network: {
    /* The genesis hash of the network (hash of block 0) */
    chainId: 'coreum-mainnet-1',
    chaintypes: new Map([
      [
        'cosmos.gov.v1beta1',
        {
          file: './proto/cosmos/gov/v1beta1/tx.proto',
          messages: ['MsgVote'],
        },
      ],
      [
        'ibc.core.client.v1',
        { file: './proto/ibc/core/client/v1/tx.proto', messages: ['MsgUpdateClient', 'MsgCreateClient'] },
      ],

      [
        'ibc.applications.transfer.v1',
        {
          file: './proto/ibc/applications/transfer/v1/tx.proto',
          messages: ['MsgTransfer'],
        },
      ],
      [
        'ibc.core.channel.v1',
        {
          file: './proto/ibc/core/channel/v1/tx.proto',
          messages: ['MsgRecvPacket', 'MsgAcknowledgement'],
        },
      ],

      [
        'cosmos.authz.v1beta1',
        {
          file: './proto/cosmos/authz/v1beta1/tx.proto',
          messages: ['MsgGrant'],
        },
      ],

      [
        'cosmos.authz.v1beta1.Grant',
        {
          file: './proto/cosmos/authz/v1beta1/authz.proto',
          messages: ['Grant'],
        },
      ],
      [
        'cosmos.bank.v1beta1',
        {
          file: './proto/cosmos/bank/v1beta1/tx.proto',
          messages: ['MsgSend', 'MsgMultiSend'],
        },
      ],
      [
        'cosmos.bank.v1beta1.bank',
        {
          file: './proto/cosmos/bank/v1beta1/bank.proto',
          messages: ['Input', 'Output'],
        },
      ],
      [
        'cosmos.base.v1beta1.coin',
        {
          file: './proto/cosmos/base/v1beta1/coin.proto',
          messages: ['Coin'],
        },
      ],
      [
        'cosmos.distribution.v1beta1',
        {
          file: './proto/cosmos/distribution/v1beta1/tx.proto',
          messages: ['MsgWithdrawDelegatorReward'],
        },
      ],
      ['cosmos.staking.v1beta1', { file: './proto/cosmos/staking/v1beta1/tx.proto', messages: ['MsgDelegate'] }],
      [
        'cosmwasm.wasm.v1',
        {
          file: './proto/cosmwasm/wasm/v1/tx.proto',
          messages: ['MsgInstantiateContract', 'MsgExecuteContract'],
        },
      ],
      [
        'coreum.asset.nft.v1',
        {
          file: './proto/coreum/asset/nft/v1/tx.proto',
          messages: [
            'MsgIssueClass',
            'MsgMint',
            'MsgBurn',
            'MsgFreeze',
            'MsgUnfreeze',
            'MsgAddToWhitelist',
            'MsgRemoveFromWhitelist',
          ],
        },
      ],
      [
        'coreum.asset.nft.v1.ClassFeature',
        { file: './proto/coreum/asset/nft/v1/nft.proto', messages: ['ClassFeature'] },
      ],
      ['google.protobuf.Any', { file: './proto/google/protobuf/any.proto', messages: ['Any'] }],
      ['google.protobuf.Timestamp', { file: './proto/google/protobuf/timestamp.proto', messages: ['Timestamp'] }],
      [
        'coreum.asset.ft.v1',
        {
          file: './proto/coreum/asset/ft/v1/tx.proto',
          messages: [
            'MsgIssue',
            'MsgMint',
            'MsgBurn',
            'MsgFreeze',
            'MsgUnfreeze',
            'MsgGloballyFreeze',
            'MsgGloballyUnfreeze',
            'MsgSetWhitelistedLimit',
          ],
        },
      ],
      [
        'coreum.asset.ft.v1.Token',
        { file: './proto/coreum/asset/ft/v1/token.proto', messages: ['Token', 'Feature', 'Definition'] },
      ],
    ]),

    /**
     * These endpoint(s) should be non-pruned archive nodes
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * We suggest providing an array of endpoints for increased speed and reliability
     */
    endpoint: ['https://full-node.mainnet-1.coreum.dev:26657'],
  },
  dataSources: [
    {
      kind: CosmosDatasourceKind.Runtime,
      startBlock: 11707433,
      endBlock: 11707435,
      mapping: {
        file: './dist/index.js',
        handlers: [
          {
            handler: 'handleTx',
            kind: CosmosHandlerKind.Transaction,
          },
          // -----------------------------------------------------------------------
          // =========== handlers for cosmos builtin modules ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgSend',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.bank.v1beta1.MsgSend',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgMultiSend',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.bank.v1beta1.MsgMultiSend',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgWithdrawDelegatorReward',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgDelegate',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.staking.v1beta1.MsgDelegate',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgGrant',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.authz.v1beta1.MsgGrant',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for NFT module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgIssueClass',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgIssueClass',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgMintNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgMint',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgBurnNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgBurn',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgFreezeNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgFreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgUnFreezeNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgUnfreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgAddToWhitelistNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgAddToWhitelist',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgRemoveFromWhitelistNFT',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.nft.v1.MsgRemoveFromWhitelist',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for FT module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgMint',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgMint',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgBurn',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgBurn',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgFreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgFreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgUnfreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgUnfreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgGloballyFreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgGloballyFreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgGloballyUnfreeze',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgGloballyUnfreeze',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgSetWhitelistedLimit',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/coreum.asset.ft.v1.MsgSetWhitelistedLimit',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for COSMWASM module ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgInstantiateContract',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmwasm.wasm.v1.MsgInstantiateContract',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgExecuteContract',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmwasm.wasm.v1.MsgExecuteContract',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for IBC  ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgUpdateClient',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/ibc.core.client.v1.MsgUpdateClient',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgCreateClient',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/ibc.core.client.v1.MsgCreateClient',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgTransfer',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/ibc.applications.transfer.v1.MsgTransfer',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgReceivePacket ',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/ibc.core.channel.v1.MsgRecvPacket',
              includeFailedTx: true,
            },
          },
          {
            handler: 'handleMsgAcknowledgement ',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/ibc.core.channel.v1.MsgAcknowledgement',
              includeFailedTx: true,
            },
          },
          // -----------------------------------------------------------------------
          // =========== handlers for GOV (vote)  ================
          // -----------------------------------------------------------------------
          {
            handler: 'handleMsgVote ',
            kind: CosmosHandlerKind.Message,
            filter: {
              type: '/cosmos.gov.v1beta1.MsgVote',
              includeFailedTx: true,
            },
          },
        ],
      },
    },
  ],
}

// Must set default to the project instance
export default project
