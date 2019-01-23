import { eventAggregator, EventCallback, Subscription } from "./event-aggregator";
import {} from "./event-aggregator";
export interface IEventAggregatorMixinBase {
  subscribe: (event: string, callback: EventCallback) => Subscription;
  subscribeOnce: (event: string, callback: EventCallback) => Subscription;
  publish: (event: string, data?: any) => void;
}
export interface IEventAggregatorMixin<T = any> extends IEventAggregatorMixinBase {
  new (): IEventAggregatorMixin<T> & T;
}
export const EventAggregatorMixin = <T = any>(superClass): IEventAggregatorMixin => {
  let mixin = class extends superClass {
    private subscriptions: Subscription[] = [];
    subscribe(event: string, callback: EventCallback): Subscription {
      let subscription = eventAggregator.subscribe(event, callback);
      this.subscriptions.push(subscription);
      return subscription;
    }
    subscribeOnce(event: string, callback: EventCallback): Subscription {
      let subscription = eventAggregator.subscribeOnce(event, callback);
      this.subscriptions.push(subscription);
      return subscription;
    }
    publish(event: string, data: any) {
      eventAggregator.publish(event, data);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.subscriptions.forEach(s => s.dispose());
    }
  };
  return (<any>mixin) as IEventAggregatorMixin<T>;
};
