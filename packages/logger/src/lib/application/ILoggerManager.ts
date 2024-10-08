
import { IDispatcherManager, IManagerInjectable, IStorageManager } from '@flow-engine/manager';
import { ILoggerFilter } from './ILoggerFilter';
import { ILogProperties } from '../domain/ILog';

export interface ILoggerManager<TFilter = ILoggerFilter>
  extends IManagerInjectable<ILoggerManagerInjectable> {
  log(properties: ILogProperties): Promise<void>;
  getLogs(conditions?: TFilter): Promise<ILogProperties[]>;
  clearLogs(): Promise<void>;
}

export interface ILoggerManagerInjectable {
  storageManager?: IStorageManager<ILogProperties>;
  dispatcherManager?: IDispatcherManager<ILogProperties>;
}
