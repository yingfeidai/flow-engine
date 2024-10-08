import {
  IConcurrencyManager,
  ILifecycleManager,
  ILockingManager,
  IManagerInjectable,
  IPluginManager,
  IStorageManager,
} from '@flow-engine/manager';
import { WorkflowStatusEnum } from '../../domain/workflow/WorkflowStatusEnum';
import { IWorkflowProperties } from '../../domain/workflow/IWorkflow';
import { ITaskProperties } from '../../domain/task/ITask';
import { ILoggerManager } from '@flow-engine/logger';
import { ISchedulerManager } from '@flow-engine/scheduler';
import { IErrorManager } from '@flow-engine/error';
import { IEventManager } from '@flow-engine/event';

export interface IEngineManager<TStatus = WorkflowStatusEnum>
  extends IManagerInjectable<IEngineManagerInjectable> {
  registerWorkflow(workflow: IWorkflowProperties): Promise<void>;
  unregisterWorkflow(workflowId: string): Promise<void>;

  startAllWorkflows(): Promise<void>;
  pauseAllWorkflows(): Promise<void>;
  resumeAllWorkflows(): Promise<void>;
  cancelAllWorkflows(): Promise<void>;
  restartAllWorkflows(): Promise<void>;

  getAllWorkflowStatuses(): Promise<{ [workflowId: string]: TStatus }>;
}

export interface IEngineManagerInjectable<TTaskProperties = ITaskProperties> {
  logManager?: ILoggerManager;
  concurrencyManager?: IConcurrencyManager<TTaskProperties>;
  lifecycleManager?: ILifecycleManager;
  pluginManager?: IPluginManager;
  schedulerManager?: ISchedulerManager;
  errorManager?: IErrorManager;
  eventManager?: IEventManager;
  storageManager?: IStorageManager;
  lockingManager?: ILockingManager;
}
