import { IManagerInjectable, IStorageManager } from '@flow-engine/manager';
import { IEventProperties } from './IEvent';

export interface IEventTriggerManager<TProperties = IEventProperties>
  extends IManagerInjectable<IEventTriggerManagerInjectable> {
  addTrigger(trigger: TProperties): Promise<void>;
  removeTrigger(triggerId: string): Promise<void>;
  executeTrigger(triggerId: string): Promise<void>;
  getTriggers(): Promise<TProperties[]>;
}

export interface IEventTriggerManagerInjectable<
  TProperties = IEventProperties
> {
  storageManager?: IStorageManager<TProperties>;
}
