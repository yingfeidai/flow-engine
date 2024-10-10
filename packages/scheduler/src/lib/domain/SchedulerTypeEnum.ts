export const schedulerTypeEnum = {
  EVENT: 'EVENT',
  TASK: 'TASK',
  WORKFLOW: 'WORKFLOW',
};

export type SchedulerTypeEnum =
  (typeof schedulerTypeEnum)[keyof typeof schedulerTypeEnum];
