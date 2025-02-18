import { ITaskProperties } from '../../domain/task/ITask';
import { ILoggerManager } from '@flow-engine/logger';
import { IErrorManager } from '@flow-engine/error';
import { IEventManager } from '@flow-engine/event';
import {
  IDependencyManager,
  IManagerSettable,
  IRetryManager,
  IStorageManager,
} from '@flow-engine/manager';
import { TaskStatusEnum } from '../../domain/task/TaskStatusEnum';

export interface ITaskManager<
  TProperties = ITaskProperties,
  TStatus = TaskStatusEnum
> extends IManagerSettable<ITaskManagerSettable<TProperties>> {
  addTask(task: TProperties): Promise<void>;
  removeTask(taskId: string): Promise<void>;
  getTask(taskId: string): Promise<TProperties | undefined>;
  getAllTasks(): Promise<TProperties[]>;
  getTasksByStatus(status: TStatus): Promise<TProperties[]>;
  startTask(taskId: string): Promise<void>;
  cancelTask(taskId: string): Promise<void>;
  updateTaskPosition(taskId: string, newPosition: number): Promise<void>;
  updateTaskStep(taskId: string, newStep: number): Promise<void>;
}

export type ITaskManagerSettable<TProperties = ITaskProperties> = {
  storageManager: IStorageManager;
  dependencyManager?: IDependencyManager<TProperties>;
  retryManager?: IRetryManager;
  logManager?: ILoggerManager;
  errorManager?: IErrorManager;
  eventManager?: IEventManager;
};
