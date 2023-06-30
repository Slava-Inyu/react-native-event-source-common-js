declare class RNEventSource {
    constructor(url: any, options?: {});
    addEventListener(type: any, listener: any): any;
    removeAllListeners(): void;
    removeListener(type: any, listener: any): void;
    close(): void;
}
export default RNEventSource;
