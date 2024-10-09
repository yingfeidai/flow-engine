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
> extends IManagerSettable<ILoggerManagerInjectable> {
  log(properties: TProperties): Promise<void>;
  getLogs(conditions?: TFilter): Promise<TProperties[]>;
  clearLogs(): Promise<void>;
}

export interface ILoggerManagerInjectable<TProperties = ILogProperties> {
  storageManager?: IStorageManager<TProperties>;
  dispatcherManager?: IDispatcherManager<TProperties>;
}
