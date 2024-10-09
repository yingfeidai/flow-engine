import { IManagerSettable, IStorageManager } from '@flow-engine/manager';
import { IEventProperties } from '../domain/IEvent';

export interface IEventQueueManager<TProperties = IEventProperties>
  extends IManagerSettable<IEventQueueManagerInjectable> {
  addEventToQueue(event: TProperties): Promise<void>;
  processNextEvent(): Promise<void>;
  getQueueLength(): Promise<number>;
  getEventPriority(eventId: string): Promise<number>;
  getEventsByPriority(priority: number): Promise<TProperties[]>;
  removeEvent(eventId: string): Promise<void>;
  pauseQueue(): Promise<void>;
  resumeQueue(): Promise<void>;
  getQueuedEvents(): Promise<TProperties[]>;
}

export interface IEventQueueManagerInjectable<TProperties = IEventProperties> {
  storageManager?: IStorageManager<TProperties>;
}
