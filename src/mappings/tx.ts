import { CosmosTransaction } from '@subql/types-cosmos';
import { toJson ,decodeBase64 } from '../common/utils';
import { Any } from '../types/proto-interfaces/google/protobuf/any';

export async function handleTx(msg: CosmosTransaction): Promise<void> {
  logger.info(`-------- ${msg.block.header.height} -----------`);
  
  for (const m of msg.decodedTx.body.messages) {
    const knownType = registry.lookupType(m.typeUrl);


    if (knownType) {
      logger.info(` in but can't find my type : ${knownType} ${toJson(knownType)}`)
  
      try {
        const decodedMsg = knownType.decode(m.value);
        const decodedMessages = [];

        // Process msgs
        if (decodedMsg.msgs) {
          const msgs: Any[] = decodedMsg.msgs;
          const decodedMsgs = msgs.map(({ typeUrl, value }) => {
            const gtype = registry.lookupType(typeUrl);
            const decodedMessage = gtype?.decode(value);
            return { type: typeUrl, ...(decodedMessage) };
          });
          decodedMessages.push(decodedMsgs);
          logger.info(` ############ msgs ############# ${toJson(decodedMsgs)} ############ ${msg.block.header.height}}#`)
          logger.info(` ############ msgs ############# ${toJson(msgs)}`)
        }

        // Process msg
        if (decodedMsg.msg) {
            const { typeUrl, value } = decodedMsg.msg;
            const gtype = registry.lookupType(typeUrl);
            const decodedMessage = gtype?.decode(value);
            decodedMessages.push(decodedMessage);
            logger.info(`this is msg ${decodedMessage}`)
          // }
          
          // (String.fromCodePoint(...decodedMsg.msg))
        }

        // Process clientMessage
        if (decodedMsg.clientMessage) {
          const { typeUrl, value } = decodedMsg.clientMessage;
          const gtype = registry.lookupType(typeUrl);
          const decodedMessage = gtype?.decode(value);
          let dmsg={ type: typeUrl, ...(decodedMessage) };


          decodedMessages.push(decodedMessage);

        }
       

        decodedMsg.msgs = decodedMessages;

      } catch (error) {
        logger.error(`Error decoding message: ${error}`);
      }
    }
    else {
      logger.info('%%%%%%%%%% Unknown %%%%%%%%%');
    }
  }
}
