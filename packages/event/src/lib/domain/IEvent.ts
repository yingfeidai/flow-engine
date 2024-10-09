import { IBaseProperties, IPropertiesManager } from '@flow-engine/manager';
import { EventTypeEnum } from './EventTypeEnum';

export interface IEventProperties<
  TType = EventTypeEnum,
  TPayload = Record<string, string | number | boolean | Date>
> extends IBaseProperties {
  type: TType;
  timestamp: Date;
  payload?: TPayload;
}

export interface IEvent<TType = EventTypeEnum, TProperties = IEventProperties>  extends IPropertiesManager<TProperties> {
  isOfType(type: TType): boolean;
}
