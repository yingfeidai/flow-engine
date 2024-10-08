import { IErrorProperties } from "../domain/IError";


export interface IErrorReporter<
TProperties = IErrorProperties
> {
  reportError(
    error: TProperties
  ): Promise<void>;
}
