import { createTransaction } from './helper'
 import { TOPIC_MESSAGE } from '../common/constants'
 import { MsgUpdateClientMessage } from '../types/CosmosMessageTypes'
 import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
​
​
 export async function handleMsgUpdateClient(msg: MsgUpdateClientMessage):Promise<void> {
   const transaction = createTransaction('MsgUpdateClientMessage', msg)
   logger.info('-------------ibc is work----------------------------')
   await sendBatchOfMessagesToKafka([{ messages: [transaction], topic: TOPIC_MESSAGE }])
 }