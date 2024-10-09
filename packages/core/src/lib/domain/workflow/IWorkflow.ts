import {
  IBaseProperties,
  IPropertiesManager,
} from '@flow-engine/manager';
import { WorkflowStatusEnum } from './WorkflowStatusEnum';
import { ITaskProperties } from '../task/ITask';

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
  extends IPropertiesManager<IProperties> {
  start(): Promise<void>;
  pause?(): Promise<void>;
  resume?(): Promise<void>;
  cancel?(): Promise<void>;

  get(): Promise<IProperties>;
  isCompleted(): boolean;
}

