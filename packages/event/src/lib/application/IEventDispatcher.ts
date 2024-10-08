import { IDispatcherManager } from "@flow-engine/manager";
import { EventTypeEnum } from "../domain/EventTypeEnum";
import { IEventProperties } from "../domain/IEvent";

export interface IEventDispatcher<
  TType = EventTypeEnum,
  TProperties = IEventProperties
> extends IDispatcherManager<TProperties> {
  register(
    eventType: TType,
    callback: (event: TProperties) => void,
    priority?: number
  ): Promise<void>;
  unregister(
    eventType: TType,
    callback: (event: TProperties) => void
  ): Promise<void>;
}
