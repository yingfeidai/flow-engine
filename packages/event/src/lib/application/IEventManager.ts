import { IEventQueueManager } from './IEventQueueManager';
import { IEventTriggerManager } from './IEventTriggerManager';
import {
  IDispatcherManager,
  IManagerSettable,
  IStorageManager,
} from '@flow-engine/manager';
import { IEventProperties } from '../domain/IEvent';
import { EventTypeEnum } from '../domain/EventTypeEnum';

export interface IEventManager<
  TType = EventTypeEnum,
  TProperties = IEventProperties
> extends IManagerSettable<IEventManagerSettable<TProperties>> {
  publish(event: TProperties): Promise<void>;
  subscribe(
    eventType: TType,
    handler: (event: TProperties) => Promise<void>
  ): Promise<void>;
  unsubscribe(
    eventType: TType,
    handler: (event: TProperties) => Promise<void>
  ): void;
  getSubscribers(eventType: TType): ((event: TProperties) => Promise<void>)[];
}

export type IEventManagerSettable<TProperties = IEventProperties> = {
  storageManager?: IStorageManager<TProperties>;
  dispatcherManager?: IDispatcherManager<TProperties>;
  queueManager?: IEventQueueManager;
  triggerManager?: IEventTriggerManager;
};
