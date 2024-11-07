type EventHandler = () => void;

class EventEmitter {
  private events: { [eventName: string]: EventHandler[] } = {};

  on(eventName: string, handler: EventHandler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  emit(eventName: string) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(handler => handler());
    }
  }
}

export const eventEmitter = new EventEmitter();
