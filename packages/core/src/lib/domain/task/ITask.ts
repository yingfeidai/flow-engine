import {
  IBaseProperties,
  IPropertiesManager,
} from '@flow-engine/manager';
import { TaskStatusEnum } from './TaskStatusEnum';

export interface ITaskProperties<
  TStatus = TaskStatusEnum,
  TInput = Record<string, string | number | boolean | Date>,
  TResult = Record<string, string | number | boolean | Date>
> extends IBaseProperties {
  position: number;
  step: number;
  name?: string;
  description?: string;
  status: TStatus;
  result?: TResult;
  input?: TInput;
  startedAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
}

export interface ITask<TProperties = ITaskProperties>
  extends IPropertiesManager<TProperties> {
  execute(): Promise<void>;
  cancel?(): Promise<void>;
}

