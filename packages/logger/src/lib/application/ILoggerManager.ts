import {
  IDispatcherManager,
  IManagerSettable,
  IStorageManager,
} from '@flow-engine/manager';
import { ILoggerFilter } from './ILoggerFilter';
import { ILogProperties } from '../domain/ILog';

export interface ILoggerManager<
  TFilter = ILoggerFilter,
  TProperties = ILogProperties
> extends IManagerSettable<ILoggerManagerSettable> {
  log(properties: TProperties): Promise<void>;
  getLogs(conditions?: TFilter): Promise<TProperties[]>;
  clearLogs(): Promise<void>;
}

export interface ILoggerManagerSettable<TProperties = ILogProperties> {
  storageManager?: IStorageManager<TProperties>;
  dispatcherManager?: IDispatcherManager<TProperties>;
}
