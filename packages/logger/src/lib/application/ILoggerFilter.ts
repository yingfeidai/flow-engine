import { ILogProperties } from "../domain/ILog";

export interface ILoggerFilter<TLogProperties = ILogProperties> {
  conditions: Partial<TLogProperties>;
}
