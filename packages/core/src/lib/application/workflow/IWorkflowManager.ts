import { IWorkflowProperties } from '../../domain/workflow/IWorkflow';
import { ILoggerManager } from '@flow-engine/logger';
import { IErrorManager } from '@flow-engine/error';
import { IEventManager } from '@flow-engine/event';
import {
  IManagerSettable,
  IConcurrencyManager,
  IDependencyManager,
  ILifecycleManager,
  IStorageManager,
} from '@flow-engine/manager';
import { ITaskManager } from '../task/ITaskManager';
import { ITaskProperties } from '../../domain/task/ITask';

export interface IWorkflowManager<TTaskProperties = ITaskProperties> extends IManagerSettable<IWorkflowManagerSettable<TTaskProperties>>{
  startWorkflow(workflowId: string): Promise<void>; // Start the workflow
  stopWorkflow(workflowId: string): Promise<void>;
  restartWorkflow(workflowId: string): Promise<void>;
  pauseWorkflow(workflowId: string): Promise<void>; // Pause the workflow
  resumeWorkflow(workflowId: string): Promise<void>; // Resume the workflow
  cancelWorkflow(workflowId: string): Promise<void>; // Cancel the workflow

  addWorkflow(workflow: IWorkflowProperties): Promise<void>; // Add a workflow
  removeWorkflow(workflowId: string): Promise<void>; // Remove a workflow
  getWorkflow(workflowId: string): Promise<IWorkflowProperties | undefined>; // Get a workflow by ID
  getAllWorkflows(): Promise<IWorkflowProperties[]>; // Get all workflows
}


export interface IWorkflowManagerSettable<TTaskProperties> {
  taskManager: ITaskManager;
  storageManager: IStorageManager;
  eventManager?: IEventManager;
  concurrencyManager?: IConcurrencyManager<TTaskProperties>;
  dependencyManager?: IDependencyManager<TTaskProperties>;
  lifecycleManager?: ILifecycleManager;
  errorManager?: IErrorManager;
  logManager?: ILoggerManager;
}
