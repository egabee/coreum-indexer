import { createTransaction } from './helper'
import { TOPIC_MESSAGE } from '../common/constants'
import { sendBatchOfMessagesToKafka } from '../common/kafka-producer'
import { MsgGrantMessage } from '../types/CosmosMessageTypes'
import { buildRegistry } from '../common/registry'
import { toJson, decodeBase64IfEncoded } from '../common/utils'

export async function handleMsgGrant(msg: MsgGrantMessage): Promise<void> {
  // let t = buildRegistry().lookupType(msg.msg.decodedMsg.grant.authorization)
  // if (t) {
  //   // let result = buildRegistry().decode({
  //   //   typeUrl: msg.msg.decodedMsg.grant.authorization.typeUrl,
  //   //   value: msg.msg.decodedMsg.grant.authorization.value,
  //   // })
  //   logger.info(`${toJson(msg.msg.decodedMsg.grant.authorization)}`)
  // }
  logger.info(`${toJson(msg.msg.decodedMsg)}`)
  await sendBatchOfMessagesToKafka([{ messages: [createTransaction('MsgGrant', msg)], topic: TOPIC_MESSAGE }])
}
