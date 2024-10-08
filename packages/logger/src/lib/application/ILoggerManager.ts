import {
  IDispatcherManager,
  IManagerInjectable,
  IStorageManager,
} from '@flow-engine/manager';
import { ILoggerFilter } from './ILoggerFilter';
import { ILogProperties } from '../domain/ILog';

export interface ILoggerManager<
  TFilter = ILoggerFilter,
  TProperties = ILogProperties
> extends IManagerInjectable<ILoggerManagerInjectable> {
  log(properties: TProperties): Promise<void>;
  getLogs(conditions?: TFilter): Promise<ILogProperties[]>;
  clearLogs(): Promise<void>;
}

export interface ILoggerManagerInjectable<TProperties = ILogProperties> {
  storageManager?: IStorageManager<TProperties>;
  dispatcherManager?: IDispatcherManager<TProperties>;
}
