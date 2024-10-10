import { IBaseProperties } from '@flow-engine/manager';
import { SchedulerTypeEnum } from './SchedulerTypeEnum';

export interface ISchedulerProperties<TScheduleType = SchedulerTypeEnum>
  extends IBaseProperties {
  scheduleTime: Date;
  type: TScheduleType;
}

export interface IScheduler<TProperties = ISchedulerProperties> {
  schedule(scheduler: TProperties): Promise<void>;
  cancelScheduled(id: string): Promise<void>;
  getScheduled(): Promise<{ id: string; scheduleTime: Date }[]>;
  pauseScheduled(id: string): Promise<void>;
  resumeScheduled(id: string): Promise<void>;
}
