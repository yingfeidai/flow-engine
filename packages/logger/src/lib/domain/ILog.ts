import { IBaseProperties } from '@flow-engine/manager';
import { LogLevelEnum } from './LogLevelEnum';

export interface ILogProperties<
  TLogLevel = LogLevelEnum,
  TLogContext = string,
  TLogMeta = Record<string, string | number | boolean | Date>
> extends IBaseProperties {
  level: TLogLevel; 
  message: string; 
  timestamp: Date; 
  context?: TLogContext; 
  metadata?: TLogMeta; 
}
