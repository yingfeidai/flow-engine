import { IManagerSettable, IStorageManager } from '@flow-engine/manager';
import { IScheduler } from '../domain/IScheduler';
import { ISchedulerCoordinatorManager } from '../domain/ISchedulerCoordinatorManager';

export interface ISchedulerManager
  extends IManagerSettable<ISchedulerManagerSettable> {
  getAllScheduled(): Promise<{ eventId: string; scheduleTime: Date }[]>;
  clearAllScheduled(): Promise<void>;
}

export type ISchedulerManagerSettable = {
  eventScheduler?: IScheduler;
  taskScheduler?: IScheduler;
  workflowScheduler?: IScheduler;
  storageManager?: IStorageManager;
  coordinatorManager?: ISchedulerCoordinatorManager;
};
