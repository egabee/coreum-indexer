import { createTransaction } from './helper'
import { TOPIC_MESSAGE } from '../common/constants'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { MsgSendMessage, MsgMultiSendMessage } from '../types/CosmosMessageTypes'

export async function handleMsgSend(msg: MsgSendMessage): Promise<void> {
  const transaction = createTransaction('MsgSend', msg)
  console.log(transaction)
  // await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}

export async function handleMsgMultiSend(msg: MsgMultiSendMessage): Promise<void> {
  const transaction = createTransaction('MsgMultiSend', msg)
  console.log(transaction)
  // await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
