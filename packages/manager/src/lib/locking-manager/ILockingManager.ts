import { LockTypeEnum } from './LockTypeEnum';

export interface ILockingManager<TType = LockTypeEnum> {
  canExecuteTask(taskId: string): Promise<boolean>;
  lockTask(taskId: string, lockType: TType): Promise<void>;
  releaseLock(taskId: string): Promise<void>;
}
