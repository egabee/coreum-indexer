// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {CosmosMessage} from "@subql/types-cosmos";

import {MsgGrant} from "./proto-interfaces/cosmos/authz/v1beta1/tx";

import {MsgUpdateClient} from "./proto-interfaces/ibc/core/client/v1/tx";

import {Grant} from "./proto-interfaces/cosmos/authz/v1beta1/authz";

import {MsgSend,MsgMultiSend} from "./proto-interfaces/cosmos/bank/v1beta1/tx";

import {Input,Output} from "./proto-interfaces/cosmos/bank/v1beta1/bank";

import {Coin} from "./proto-interfaces/cosmos/base/v1beta1/coin";

import {MsgWithdrawDelegatorReward} from "./proto-interfaces/cosmos/distribution/v1beta1/tx";

import {MsgDelegate} from "./proto-interfaces/cosmos/staking/v1beta1/tx";

import {MsgInstantiateContract,MsgExecuteContract} from "./proto-interfaces/cosmwasm/wasm/v1/tx";

import {MsgIssueClass,MsgMint,MsgBurn,MsgFreeze,MsgUnfreeze,MsgAddToWhitelist,MsgRemoveFromWhitelist} from "./proto-interfaces/coreum/asset/nft/v1/tx";

import {ClassFeature} from "./proto-interfaces/coreum/asset/nft/v1/nft";

import {Any} from "./proto-interfaces/google/protobuf/any";

import {MsgIssue,MsgMint,MsgBurn,MsgFreeze,MsgUnfreeze,MsgGloballyFreeze,MsgGloballyUnfreeze,MsgSetWhitelistedLimit} from "./proto-interfaces/coreum/asset/ft/v1/tx";

import {Token,Feature,Definition} from "./proto-interfaces/coreum/asset/ft/v1/token";


export type MsgGrantMessage = CosmosMessage<MsgGrant>;

export type MsgUpdateClientMessage = CosmosMessage<MsgUpdateClient>;

export type GrantMessage = CosmosMessage<Grant>;

export type MsgSendMessage = CosmosMessage<MsgSend>;
export type MsgMultiSendMessage = CosmosMessage<MsgMultiSend>;

export type InputMessage = CosmosMessage<Input>;
export type OutputMessage = CosmosMessage<Output>;

export type CoinMessage = CosmosMessage<Coin>;

export type MsgWithdrawDelegatorRewardMessage = CosmosMessage<MsgWithdrawDelegatorReward>;

export type MsgDelegateMessage = CosmosMessage<MsgDelegate>;

export type MsgInstantiateContractMessage = CosmosMessage<MsgInstantiateContract>;
export type MsgExecuteContractMessage = CosmosMessage<MsgExecuteContract>;

export type MsgIssueClassMessage = CosmosMessage<MsgIssueClass>;
export type MsgMintMessage = CosmosMessage<MsgMint>;
export type MsgBurnMessage = CosmosMessage<MsgBurn>;
export type MsgFreezeMessage = CosmosMessage<MsgFreeze>;
export type MsgUnfreezeMessage = CosmosMessage<MsgUnfreeze>;
export type MsgAddToWhitelistMessage = CosmosMessage<MsgAddToWhitelist>;
export type MsgRemoveFromWhitelistMessage = CosmosMessage<MsgRemoveFromWhitelist>;

export type ClassFeatureMessage = CosmosMessage<ClassFeature>;

export type AnyMessage = CosmosMessage<Any>;

export type MsgIssueMessage = CosmosMessage<MsgIssue>;
export type MsgMintMessage = CosmosMessage<MsgMint>;
export type MsgBurnMessage = CosmosMessage<MsgBurn>;
export type MsgFreezeMessage = CosmosMessage<MsgFreeze>;
export type MsgUnfreezeMessage = CosmosMessage<MsgUnfreeze>;
export type MsgGloballyFreezeMessage = CosmosMessage<MsgGloballyFreeze>;
export type MsgGloballyUnfreezeMessage = CosmosMessage<MsgGloballyUnfreeze>;
export type MsgSetWhitelistedLimitMessage = CosmosMessage<MsgSetWhitelistedLimit>;

export type TokenMessage = CosmosMessage<Token>;
export type FeatureMessage = CosmosMessage<Feature>;
export type DefinitionMessage = CosmosMessage<Definition>;
