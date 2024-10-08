import { IErrorHandler } from './IErrorHandler';
import { IErrorReporter } from './IErrorReporter';
import { IStorageManager } from '@flow-engine/manager';
import { IErrorProperties } from '../domain/IError';
import { IErrorFilter } from './IErrorFilter';
import { IErrorRecoveryStrategy } from './IErrorRecoveryStrategy';

export interface IErrorManager<
  TProperties = IErrorProperties,
  TFilter = IErrorFilter,
> extends IStorageManager{
  // 错误处理器管理
  registerHandler(
    handler: IErrorHandler<TProperties>
  ): void;
  unregisterHandler(
    handler: IErrorHandler<TProperties>
  ): void;
  getHandlers(): IErrorHandler<TProperties>[];

  // 错误报告器管理
  registerReporter(
    reporter: IErrorReporter<TProperties>
  ): void;
  unregisterReporter(
    reporter: IErrorReporter<TProperties>
  ): void;
  getReporters(): IErrorReporter<TProperties>[];

  // 错误恢复策略管理
  registerRecoveryStrategy(
      strategy: IErrorRecoveryStrategy<TProperties>
    ): void;
    unregisterRecoveryStrategy(
      strategy: IErrorRecoveryStrategy<TProperties>
    ): void;
    getRecoveryStrategies(): IErrorRecoveryStrategy<TProperties>[];

    
  // 捕获错误
  captureError(error: TProperties): void;
  getAllErrors(): Promise<TProperties[]>;
  getLogs(conditions?: TFilter): Promise<IErrorProperties[]>;
  clearErrors(): Promise<void>;
}
