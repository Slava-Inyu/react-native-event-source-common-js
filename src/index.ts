// @ts-nocheck
import EventSource from "./EventSource";

class RNEventSource {
  constructor(url: any, options = {}) {
    this.url = url;
    this.options = options;
    this.eventSource = new EventSource(url, options);
    this.listeners = [];
  }
  addEventListener(type: any, listener: any) {
    this.eventSource.addEventListener(type, listener);

    const remove = () => {
      this.removeListener(type, listener);
    };

    this.listeners.push({
      remove: remove,
      type: type,
      listener: listener,
    });

    return this.listeners[this.listeners.length - 1];
  }
  removeAllListeners() {
    this.listeners.map((listener: any) => {
      listener.remove();
    });
  }
  removeListener(type: any, listener: any) {
    this.eventSource.removeEventListener(type, listener);
  }
  close() {
    this.eventSource.close();
  }
}

export default RNEventSource;
