type Callback = (...args: any) => void;

interface EventUtil {
  readonly list: Map<string, Callback[]>;
  readonly emitQueue: Map<string, Callback[]>;
  on: (type: string, cb: Callback) => EventUtil;
  off: (type: string, cb?: Callback) => EventUtil;
  emit: (type: string, ...args: unknown[]) => void;
}

export const eventUtil: EventUtil = {
  list: new Map(),
  emitQueue: new Map(),
  on(type, cb) {
    this.list.has(type) || this.list.set(type, []);
    this.list.get(type)?.push(cb);
    return this;
  },
  off(type, cb) {
    if (cb !== undefined) {
      this.list.set(
        type,
        this.list.get(type)?.filter((event) => event !== cb) ?? []
      );
      return this;
    }
    this.list.delete(type);
    return this;
  },
  emit(type, ...args) {
    if (this.list.has(type)) {
      this.list.get(type)?.forEach((cb) => cb(args));
    }
  },
};
