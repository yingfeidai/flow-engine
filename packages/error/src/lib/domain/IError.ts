import { IPropertiesManager } from '@flow-engine/manager';
import { ErrorLevelEnum } from './ErrorLevelEnum';

export interface IErrorProperties<
  TErrorLevel = ErrorLevelEnum,
  TErrorCode = string,
  TErrorContext = IErrorContextProperties
> {
  errorCode: TErrorCode;
  message: string;
  level: TErrorLevel;
  context?: TErrorContext;
  timestamp: Date;
}

export interface IErrorContextProperties {
  requestId?: string;
  userId?: string;
  additionalInfo?: Record<string, unknown>;
}

export interface IError<TProperties = IErrorProperties>
  extends IPropertiesManager<TProperties> {
  escalateError(): Promise<void>;
}
