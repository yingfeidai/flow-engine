import { IEventQueueManager } from "./IEventQueueManager";
import { IEventTriggerManager } from "../domain/IEventTriggerManager";
import { IDispatcherManager, IManagerInjectable, IStorageManager } from "@flow-engine/manager";
import { IEventProperties } from "../domain/IEvent";
import { EventTypeEnum } from "../domain/EventTypeEnum";

export interface IEventManager<TType = EventTypeEnum, TProperties = IEventProperties>
  extends IManagerInjectable<IEventManagerInjectable> {
  publish(event: TProperties): Promise<void>;
  subscribe(eventType: TType, handler: (event: TProperties) => void): Promise<void>;
  unsubscribe(
    eventType: TType,
    handler: (event: TProperties) => Promise<void>
  ): void;
  getSubscribers(eventType: TType): ((event: TProperties) => void)[];
}

export interface IEventManagerInjectable {
  storageManager?: IStorageManager<IEventProperties>;
  dispatcherManager?: IDispatcherManager<IEventProperties>;
  queueManager?: IEventQueueManager;
  triggerManager?: IEventTriggerManager;
}
