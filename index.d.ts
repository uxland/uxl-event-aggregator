declare module '@uxland/uxl-event-aggregator/event-aggregator' {
	export type EventCallback = (data?: any, event?: string) => void;
	export interface Subscription {
	    dispose(): void;
	} class EventAggregator {
	    private eventLookup;
	    private messageHandlers;
	    constructor();
	    publish(event: any, data: any): void;
	    subscribe(event: any, callback: any): {
	        dispose(): void;
	    };
	    subscribeOnce(event: any, callback: any): {
	        dispose(): void;
	    };
	}
	export const eventAggregator: EventAggregator;
	export const subscribe: any;
	export const subscribeOnce: any;
	export const publish: any;
	export {};

}
declare module '@uxland/uxl-event-aggregator/event-aggregator-mixin' {
	import { EventCallback, Subscription } from '@uxland/uxl-event-aggregator/event-aggregator';
	export interface IEventAggregatorMixinBase {
	    subscribe: (event: string, callback: EventCallback) => Subscription;
	    subscribeOnce: (event: string, callback: EventCallback) => Subscription;
	    publish: (event: string, data?: any) => void;
	}
	export interface IEventAggregatorMixin<T = any> extends IEventAggregatorMixinBase {
	    new (): IEventAggregatorMixin<T> & T;
	}
	export const EventAggregatorMixin: <T = any>(superClass: any) => IEventAggregatorMixin<any>;

}
declare module '@uxland/uxl-event-aggregator' {
	export { EventCallback, Subscription } from '@uxland/uxl-event-aggregator/event-aggregator';
	export { IEventAggregatorMixin, IEventAggregatorMixinBase } from '@uxland/uxl-event-aggregator/event-aggregator-mixin';

}
