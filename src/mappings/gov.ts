import { createTransaction } from './helper'
 import { TOPIC_MESSAGE } from '../common/constants'
 import { MsgVoteMessage} from '../types/CosmosMessageTypes'
 import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
​

export async function handleMsgVote(msg:MsgVoteMessage):Promise<void> {
    const transaction = createTransaction('MsgVoteMessage',msg)
    await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
  }
  