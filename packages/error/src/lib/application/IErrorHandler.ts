import { IErrorProperties } from '../domain/IError';

export interface IErrorHandler<TProperties = IErrorProperties> {
  handleError(error: TProperties): Promise<void>;
}
