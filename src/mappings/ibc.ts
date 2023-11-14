import { createTransaction } from './helper'
 import { TOPIC_MESSAGE } from '../common/constants'
 import { MsgUpdateClientMessage ,MsgCreateClientMessage,MsgTransferMessage,MsgRecvPacketMessage,MsgAcknowledgementMessage,MsgChannelOpenInitMessage,MsgChannelOpenAckMessage,MsgChannelOpenConfirmMessage} from '../types/CosmosMessageTypes'
 import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
​import { toJson } from '../common/utils'
​
 export async function handleMsgUpdateClient(msg: MsgUpdateClientMessage):Promise<void> {
   const transaction = createTransaction('MsgUpdateClient', msg)
   await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
 
 }
 export async function handleMsgCreateClient(msg: MsgCreateClientMessage):Promise<void> {
  const transaction = createTransaction('MsgCreateClient', msg)

  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
export async function handleMsgTransfer(msg: MsgTransferMessage):Promise<void> {
  const transaction = createTransaction('MsgTransfer', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
export async function handleMsgReceivePacket(msg:MsgRecvPacketMessage) {
  const transaction=createTransaction('MsgRecvPacket',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}

export async function handleMsgAcknowledgement(msg:MsgAcknowledgementMessage):Promise<void> {
  const transaction = createTransaction('MsgAcknowledgement',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}
// MsgChannelOpenInit ==>/proto/ibc/core/channel/v1/tx.proto
// MsgChannelOpenAck
// MsgChannelOpenConfirm
 

export async function handleMsgChannelOpenInit(msg:MsgChannelOpenInitMessage):Promise<void> {
  const transaction = createTransaction('MsgChannelOpenInit',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}

export async function handleMsgChannelOpenAck(msg:MsgChannelOpenAckMessage):Promise<void> {
  const transaction = createTransaction('MsgChannelOpenAck',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}

export async function handleMsgChannelOpenConfirm(msg:MsgChannelOpenConfirmMessage):Promise<void> {
  const transaction = createTransaction('MsgChannelOpenConfirm',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}
