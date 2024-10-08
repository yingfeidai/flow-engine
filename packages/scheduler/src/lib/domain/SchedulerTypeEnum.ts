export const scheduleTypeEnum = {
  EVENT: 'Event',
  TASK: 'Task',
  WORKFLOW: 'Workflow',
};

export type ScheduleTypeEnum =
  (typeof scheduleTypeEnum)[keyof typeof scheduleTypeEnum];
