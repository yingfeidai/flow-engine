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
  registerHandler(handler: IErrorHandler<TProperties>): void;
  unregisterHandler(handler: IErrorHandler<TProperties>): void;
  getHandlers(): IErrorHandler<TProperties>[];

  registerReporter(reporter: IErrorReporter<TProperties>): void;
  unregisterReporter(reporter: IErrorReporter<TProperties>): void;
  getReporters(): IErrorReporter<TProperties>[];

  registerRecoveryStrategy(strategy: IErrorRecoveryStrategy<TProperties>): void;
  unregisterRecoveryStrategy(
    strategy: IErrorRecoveryStrategy<TProperties>
  ): void;
  getRecoveryStrategies(): IErrorRecoveryStrategy<TProperties>[];

  captureError(error: TProperties): void;
  getAllErrors(): Promise<TProperties[]>;
  getErrors(conditions?: TFilter): Promise<TProperties[]>;
  clearErrors(): Promise<void>;
}
