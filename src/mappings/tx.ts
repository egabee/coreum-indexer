import { CosmosTransaction } from '@subql/types-cosmos'
import { registry } from '../common/registry'
import { toJson } from '../common/utils'

export async function handleTx(msg: CosmosTransaction): Promise<void> {
  msg.decodedTx.body.messages.forEach((m) => {
    let ty = registry.lookupType(m.typeUrl)
    if (ty) {
      logger.info(`${toJson(m)}`)
      let t = registry.decode(m)
      logger.info(`${toJson(t)}`)
    }
    logger.info(`${toJson(msg)}`)
  })
}
