import { eventEmitter } from './utils/eventEmitter';
import { EVENT_NAMES } from './constants/eventNames';

// Configuración extendida de las cartas
const cardConfigs = [
  {
    name: 'Scurry Oak',
    events: [
      {
        listenEvent: EVENT_NAMES.COUNTERS_BUFO,
        action: () => {
          //console.log('Scurry Oak escuchó "COUNTERS_BUFO" y emite "CREAR CRIATURA"');
          eventEmitter.emit(EVENT_NAMES.CRIATURA_ETB);
          eventEmitter.emit(EVENT_NAMES.TOKEN_ETB);
        }
      },
    ]
  },
  {
    name: 'Ivy Lane Denizen',
    events: [
      {
        listenEvent: EVENT_NAMES.CRIATURA_ETB,
        action: () => {
          //console.log('CardD escuchó "criatura" y emite "countersbufo"');
          eventEmitter.emit(EVENT_NAMES.COUNTERS_BUFO);
        }
      }
    ]
  }
];
  
export default cardConfigs;
  
