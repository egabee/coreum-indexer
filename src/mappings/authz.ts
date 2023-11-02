import { createTransaction } from './helper'
import { TOPIC_MESSAGE } from '../common/constants'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { MsgGrantMessage } from '../types/CosmosMessageTypes'

export async function handleMsgGrant(msg: MsgGrantMessage): Promise<void> {
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgGrant', msg)], topic: TOPIC_MESSAGE }])
}
