import { createTransaction } from './helper'
 import { TOPIC_MESSAGE } from '../common/constants'
 import { MsgUpdateClientMessage ,MsgCreateClientMessage,MsgTransferMessage,MsgRecvPacketMessage,MsgAcknowledgementMessage,MsgVoteMessage} from '../types/CosmosMessageTypes'
 import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
​
​
 export async function handleMsgUpdateClient(msg: MsgUpdateClientMessage):Promise<void> {
   const transaction = createTransaction('MsgUpdateClientMessage', msg)
   await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
 }
 export async function handleMsgCreateClient(msg: MsgCreateClientMessage):Promise<void> {
  const transaction = createTransaction('MsgUpdateClientMessage', msg)

  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
export async function handleMsgTransfer(msg: MsgTransferMessage):Promise<void> {
  const transaction = createTransaction('MsgTransferMessage', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
export async function handleMsgRecvPacket(msg:MsgRecvPacketMessage) {
  const transaction=createTransaction('MsgRecvPacketMessage',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}

export async function handleMsgAcknowledgement(msg:MsgAcknowledgementMessage):Promise<void> {
  const transaction = createTransaction('MsgAcknowledgementMessage',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
 
export async function handleMsgVote(msg:MsgVoteMessage):Promise<void> {
  const transaction = createTransaction('MsgVoteMessage',msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
