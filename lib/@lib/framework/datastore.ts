import { retrieve, assign, exists, pathsFor } from '../utils/fn';

export interface Subscriber {
  id: number;
  path: string;
  callback: Function;
  context?: any;
}

export interface Event {
  path: string;
  newVal: any;
  oldVal: any;
  operation: string;
  delta?: any;
}

class Datastore<T> {
  data: T;
  nextCallbackId: number = 0;

  private subscribers: Subscriber[] = [];

  constructor(data: T) {
    this.data = data;
  }

  exists(path: string) {
    return exists(this.data, path);
  }

  get(path: string, default_: any = undefined) {
    if(this.exists(path)) {
      return retrieve(this.data, path);
    } else {
      return default_;
    }
  }

  set(path: string, value: any) {
    let oldVal = retrieve(this.data, path);
    let newVal = assign(this.data, path, value);
    this.notify(path, newVal, oldVal, 'set');
  }

  update(path: string, value: any, forceSet: boolean = false) {
    if(this.exists(path)) {
      let oldVal = this.data[path];
      let newVal = assign(this.data, path, value);
      this.notify(path, newVal, oldVal, 'update');
    } else if(forceSet) {
      this.set(path, value);
    } else {
      throw `Cannot update path ${path}, as it does not exist.`
    }
  }

  insert(path: string, value: any, pos: number = -1) {
    if(Array.isArray(this.data[path])) {
      let oldVal = retrieve(this.data, path);
      let newVal = oldVal.slice(0);
      if(pos === -1) {
        newVal = [...newVal, value];
      } else if(pos === 0) {
        newVal = [value, ...newVal];
      } else {
        newVal.splice(pos, 0, value);
      }
      assign(this.data, path, newVal);
      this.notify(path, newVal, oldVal, 'insert', value);
    }
  }

  batchInsert(path: string, values: Array<any>) {
    if(Array.isArray(this.data[path])) {
      let oldVal = retrieve(this.data, path);
      let newVal = oldVal.slice(0);
      newVal = newVal.concat(values);
      assign(this.data, path, newVal);
      this.notify(path, newVal, oldVal, 'insert', values);
    }
  }

  subscribe(callback: Function, context?): void;
  subscribe(path: string, callback: Function, context?): void;
  subscribe(arg0: any, arg1: any, arg2?): void {
    const path: string = typeof arg0 === 'string' ? arg0 : null;
    const callback: Function = typeof arg0 === 'function' ? arg0 : arg1;
    const context: any = typeof arg0 === 'string' ? arg2 : arg1;

    let subscriber: Subscriber = {
      path,
      callback,
      id: this.nextCallbackId++,
      context,
    };

    if(context) {
      subscriber.context = context;
    }

    this.subscribers.push(subscriber);
  }

  unsubscribe(callback: Subscriber|number) {
    let callbackID: number = typeof callback === 'number'
      ? callback
      : callback.id;
    let i = this.subscribers.findIndex((callback_: Subscriber) => callback_.id == callbackID);
    this.subscribers.splice(i, 1);
  }

  notify(path, newVal, oldVal, operation, delta?) {
    let subscribers = this.subscribersFor(path);

    subscribers
      .forEach(sub => {
        let event: Event = {
          path,
          newVal,
          oldVal,
          operation,
          delta,
        };
        sub.callback.call(sub.context || null, event);
      });
  }

  subscribersFor(path: string): Subscriber[] {
    let paths = pathsFor(path);

    return this.subscribers
      .filter(sub => sub.path ? paths.indexOf(sub.path) > -1 : true);
  }
}

export { Datastore };