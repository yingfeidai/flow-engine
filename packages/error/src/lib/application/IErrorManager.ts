import { IErrorHandler } from './IErrorHandler';
import { IErrorReporter } from './IErrorReporter';
import { IStorageManager } from '@flow-engine/manager';
import { IErrorProperties } from '../domain/IError';
import { IErrorFilter } from './IErrorFilter';
import { IErrorRecoveryStrategy } from './IErrorRecoveryStrategy';

export interface IErrorManager<
  TProperties = IErrorProperties,
  TFilter = IErrorFilter
> extends IStorageManager {
  registerHandler(handler: IErrorHandler<TProperties>): Promise<void>;
  unregisterHandler(handler: IErrorHandler<TProperties>): Promise<void>;
  getHandlers(): IErrorHandler<TProperties>[];

  registerReporter(reporter: IErrorReporter<TProperties>): Promise<void>;
  unregisterReporter(reporter: IErrorReporter<TProperties>): Promise<void>;
  getReporters(): IErrorReporter<TProperties>[];

  registerRecoveryStrategy(strategy: IErrorRecoveryStrategy<TProperties>): Promise<void>;
  unregisterRecoveryStrategy(
    strategy: IErrorRecoveryStrategy<TProperties>
  ): Promise<void>;
  getRecoveryStrategies(): IErrorRecoveryStrategy<TProperties>[];

  captureError(error: TProperties): Promise<void>;
  getAllErrors(): Promise<TProperties[]>;
  getErrors(conditions?: TFilter): Promise<TProperties[]>;
  clearErrors(): Promise<void>;
}
