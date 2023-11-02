import { createTransaction } from './helper'
import { TOPIC_MESSAGE } from '../common/constants'
import { MsgDelegateMessage } from '../types/CosmosMessageTypes'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'

export async function handleMsgDelegate(msg: MsgDelegateMessage) {
  const transaction = createTransaction('MsgDelegate', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
