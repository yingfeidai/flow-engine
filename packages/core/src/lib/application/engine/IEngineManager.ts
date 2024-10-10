import {
  IConcurrencyManager,
  ILifecycleManager,
  ILockingManager,
  IManagerSettable,
  IPluginManager,
  IStorageManager,
} from '@flow-engine/manager';
import { WorkflowStatusEnum } from '../../domain/workflow/WorkflowStatusEnum';
import { IWorkflowProperties } from '../../domain/workflow/IWorkflow';
import { ILoggerManager } from '@flow-engine/logger';
import { ISchedulerManager } from '@flow-engine/scheduler';
import { IErrorManager } from '@flow-engine/error';
import { IEventManager } from '@flow-engine/event';

export interface IEngineManager<TStatus = WorkflowStatusEnum>
  extends IManagerSettable<IEngineManagerSettable<TStatus>> {
  registerWorkflow(workflow: IWorkflowProperties): Promise<void>;
  unregisterWorkflow(workflowId: string): Promise<void>;

  startAllWorkflows(): Promise<void>;
  pauseAllWorkflows(): Promise<void>;
  resumeAllWorkflows(): Promise<void>;
  cancelAllWorkflows(): Promise<void>;
  restartAllWorkflows(): Promise<void>;

  getAllWorkflowStatuses(): Promise<{ [workflowId: string]: TStatus }>;
}

export type IEngineManagerSettable<TStatus> = {
  storageManager: IStorageManager;
  logManager?: ILoggerManager;
  concurrencyManager?: IConcurrencyManager;
  lifecycleManager?: ILifecycleManager<TStatus>;
  pluginManager?: IPluginManager;
  schedulerManager?: ISchedulerManager;
  errorManager?: IErrorManager;
  eventManager?: IEventManager;
  lockingManager?: ILockingManager;
};
