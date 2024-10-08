import { IBaseProperties, IDependencyManager, IManagerInjectable, IPropertiesManager, IRetryManager, IStorageManager } from "@flow-engine/manager";
import { TaskStatusEnum } from "./TaskStatusEnum";
import { ILoggerManager } from "@flow-engine/logger";
import { IErrorManager } from "@flow-engine/error";
import { IEventManager } from "@flow-engine/event";

export interface ITaskProperties<
  TStatus = TaskStatusEnum,
  TInput = Record<string, string | number | boolean | Date >,
  TResult =  Record<string, string | number | boolean | Date >,
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
  extends IPropertiesManager<TProperties>,
    IManagerInjectable<ITaskManagerInjectable> {
  execute(): Promise<void>;
  cancel?(): Promise<void>;

  update(
    properties: Partial<TProperties>
  ): Promise<void>;
}

export interface ITaskManagerInjectable {
  dependencyManager?: IDependencyManager<ITask>;
  retryManager?: IRetryManager;
  logManager?: ILoggerManager;
  errorManager?: IErrorManager;
  eventManager?: IEventManager;
  storageManager?: IStorageManager;
}
