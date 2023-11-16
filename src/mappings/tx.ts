import { CosmosTransaction } from '@subql/types-cosmos'
import { toJson } from '../common/utils'
import { Any } from '../types/proto-interfaces/google/protobuf/any'

export async function handleTx(msg: CosmosTransaction): Promise<void> {
  msg.decodedTx.body.messages.forEach((m) => {
    const knownType = registry.lookupType(m.typeUrl)

    if (knownType) {
      let decodedMsg = knownType.decode(m.value)

      if (decodedMsg.msgs) {
        const decodedMessages = []
        const msgs: Any[] = decodedMsg.msgs

        for (const { typeUrl, value } of msgs) {
          const gtype = registry.lookupType(typeUrl)
          const decodedMessage = gtype?.decode(value)
          // logger.info(`decoded message for ${typeUrl}: ${toJson(decodedMessage)}`)
          decodedMessages.push({ type: typeUrl, ...decodedMessage })
        }

        decodedMsg.msgs = decodedMessages
      }

      logger.info(`Fully decoded message: ${toJson(decodedMsg)}`)
    }
  })
}
