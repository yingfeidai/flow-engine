import { IErrorProperties } from "../domain/IError";

export interface IErrorFilter<TProperties = IErrorProperties> {
  conditions: Partial<TProperties>;
}
