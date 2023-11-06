import { createTransaction } from './helper'
 import { TOPIC_MESSAGE } from '../common/constants'
 import { MsgUpdateClientMessage ,MsgCreateClientMessage,MsgTransferMessage,MsgRecvPacketMessage,MsgAcknowledgementMessage,MsgVoteMessage} from '../types/CosmosMessageTypes'
 import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
​
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
export async function handleMsgRecvPacket(msg:MsgRecvPacketMessage) {
  const transaction=createTransaction('MsgRecvPacket',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgAcknowledgement(msg:MsgAcknowledgementMessage):Promise<void> {
  const transaction = createTransaction('MsgAcknowledgement',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
 
