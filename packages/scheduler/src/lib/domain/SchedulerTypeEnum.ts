export const schedulerTypeEnum = {
  EVENT: 'Event',
  TASK: 'Task',
  WORKFLOW: 'Workflow',
};

export type SchedulerTypeEnum =
  (typeof schedulerTypeEnum)[keyof typeof schedulerTypeEnum];
