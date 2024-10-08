import { IErrorProperties } from '../domain/IError';

export interface IErrorRecoveryStrategy<TProperties = IErrorProperties> {
  recover(error: TProperties): Promise<void>;
}
