import { createTransaction } from './helper'
import { TOPIC_MESSAGE } from '../common/constants'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { MsgWithdrawDelegatorRewardMessage } from '../types/CosmosMessageTypes'

export async function handleMsgWithdrawDelegatorReward(msg: MsgWithdrawDelegatorRewardMessage) {
  const transaction = createTransaction('MsgWithdrawDelegatorReward', msg)
  await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
}
