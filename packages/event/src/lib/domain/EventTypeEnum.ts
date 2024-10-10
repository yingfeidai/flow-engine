export const eventTypeEnum = {
  WORKFLOW_STARTED: 'WORKFLOW_STARTED',
  WORKFLOW_PAUSED: 'WORKFLOW_PAUSED',
  WORKFLOW_RESUMED: 'WORKFLOW_RESUMED',
  WORKFLOW_COMPLETED: 'WORKFLOW_COMPLETED',
  WORKFLOW_FAILED: 'WORKFLOW_FAILED',
  TASK_STARTED: 'TASK_STARTED',
  TASK_COMPLETED: 'TASK_COMPLETED',
  TASK_FAILED: 'TASK_FAILED',
  SCHEDULED_EVENT_TRIGGERED: 'SCHEDULED_EVENT_TRIGGERED',
  EXTERNAL_EVENT_TRIGGERED: 'EXTERNAL_EVENT_TRIGGERED',
  PARALLEL_EXECUTION_STARTED: 'PARALLEL_EXECUTION_STARTED',
  PARALLEL_EXECUTION_COMPLETED: 'PARALLEL_EXECUTION_COMPLETED',
  CONCURRENCY_LIMIT_EXCEEDED: 'CONCURRENCY_LIMIT_EXCEEDED',
} as const;

export type EventTypeEnum = (typeof eventTypeEnum)[keyof typeof eventTypeEnum];
