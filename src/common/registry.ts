import { Registry, GeneratedType, DecodeObject } from '@cosmjs/proto-signing'
import { defaultRegistryTypes } from '@cosmjs/stargate'
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin,
} from 'cosmjs-types/cosmwasm/wasm/v1/tx'

export function buildRegistry(): Registry {
  const wasmTypes: ReadonlyArray<[string, GeneratedType]> = [
    ['/cosmwasm.wasm.v1.MsgClearAdmin', MsgClearAdmin],
    ['/cosmwasm.wasm.v1.MsgExecuteContract', MsgExecuteContract],
    ['/cosmwasm.wasm.v1.MsgMigrateContract', MsgMigrateContract],
    ['/cosmwasm.wasm.v1.MsgStoreCode', MsgStoreCode],
    ['/cosmwasm.wasm.v1.MsgInstantiateContract', MsgInstantiateContract],
    ['/cosmwasm.wasm.v1.MsgUpdateAdmin', MsgUpdateAdmin],
  ]

  const registry = new Registry([...defaultRegistryTypes, ...wasmTypes])

  return registry
}

export const registry = buildRegistry()
