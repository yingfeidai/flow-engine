import {
  IBaseProperties,
  IConcurrencyManager,
  IDependencyManager,
  ILifecycleManager,
  IManagerSettable,
  IPropertiesManager,
  IStorageManager,
} from '@flow-engine/manager';
import { WorkflowStatusEnum } from './WorkflowStatusEnum';
import { ITaskProperties } from '../task/ITask';
import { ITaskManager } from '../../application/task/ITaskManager';
import { ILoggerManager } from '@flow-engine/logger';
import { IErrorManager } from '@flow-engine/error';
import { IEventManager } from '@flow-engine/event';

export interface IWorkflowProperties<
  TStatus = WorkflowStatusEnum,
  TResult = Record<string, string | number | boolean | Date>
> extends IBaseProperties {
  name?: string;
  description?: string;
  status: TStatus;
  result?: TResult;
  tasks: ITaskProperties[];
  startedAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
}

export interface IWorkflow<IProperties = IWorkflowProperties>
  extends IPropertiesManager<IProperties>,
  IManagerSettable<IWorkflowManagerInjectable> {
  start(): Promise<void>;
  pause?(): Promise<void>;
  resume?(): Promise<void>;
  cancel?(): Promise<void>;

  get(): Promise<IProperties>;
  isCompleted(): boolean;
}

export interface IWorkflowManagerInjectable {
  taskManager?: ITaskManager;
  concurrencyManager?: IConcurrencyManager<ITaskProperties>;
  logManager?: ILoggerManager;
  dependencyManager?: IDependencyManager<ITaskProperties>;
  lifecycleManager?: ILifecycleManager;
  errorManager?: IErrorManager;
  eventManager?: IEventManager;
  storageManager?: IStorageManager;
}
