import { createTransaction } from './helper'
 import { TOPIC_MESSAGE } from '../common/constants'
 import { MsgUpdateClientMessage ,MsgCreateClientMessage,MsgTransferMessage,MsgRecvPacketMessage} from '../types/CosmosMessageTypes'
 import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
​
​
 export async function handleMsgUpdateClient(msg: MsgUpdateClientMessage):Promise<void> {
   const transaction = createTransaction('MsgUpdateClientMessage', msg)
   logger.info('-------------ibc is update client----------------------------')

   await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
 }
 export async function handleMsgCreateClient(msg: MsgCreateClientMessage):Promise<void> {
  const transaction = createTransaction('MsgUpdateClientMessage', msg)
  logger.info('-------------ibc is create clint----------------------------')

  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
export async function handleMsgTransfer(msg: MsgTransferMessage):Promise<void> {
  const transaction = createTransaction('MsgTransferMessage', msg)
  logger.info('----// oo \\--**********-------ibc is Transfer init----------------------------')
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
export async function handleMsgRecvPacket(msg:MsgRecvPacketMessage) {
  const transaction=createTransaction('MsgRecvPacketMessage',msg)
  logger.info('----// oo \\--**********-------ibc is recived init----------------------------')
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])

}


 
