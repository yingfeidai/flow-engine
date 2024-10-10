import { IManagerSettable, IStorageManager } from '@flow-engine/manager';
import { IEventProperties } from '../domain/IEvent';

export interface IEventQueueManager<TProperties = IEventProperties>
  extends IManagerSettable<IEventQueueManagerSettable<TProperties>> {
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

export type IEventQueueManagerSettable<TProperties> = {
  storageManager?: IStorageManager<TProperties>;
};
