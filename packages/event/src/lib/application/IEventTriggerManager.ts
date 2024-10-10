import { IManagerSettable, IStorageManager } from '@flow-engine/manager';
import { IEventProperties } from '../domain/IEvent';

export interface IEventTriggerManager<TProperties = IEventProperties>
  extends IManagerSettable<IEventTriggerManagerSettable<TProperties>> {
  addTrigger(trigger: TProperties): Promise<void>;
  removeTrigger(triggerId: string): Promise<void>;
  executeTrigger(triggerId: string): Promise<void>;
  getTriggers(): Promise<TProperties[]>;
}

export type IEventTriggerManagerSettable<TProperties = IEventProperties> = {
  storageManager?: IStorageManager<TProperties>;
};
