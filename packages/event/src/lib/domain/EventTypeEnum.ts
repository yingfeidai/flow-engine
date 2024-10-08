export const eventTypeEnum = {
  WorkflowStarted: 'WorkflowStarted',
  WorkflowPaused: 'WorkflowPaused',
  WorkflowResumed: 'WorkflowResumed',
  WorkflowCompleted: 'WorkflowCompleted',
  WorkflowFailed: 'WorkflowFailed',
  TaskStarted: 'TaskStarted',
  TaskCompleted: 'TaskCompleted',
  TaskFailed: 'TaskFailed',
  ScheduledEventTriggered: 'ScheduledEventTriggered',
  ExternalEventTriggered: 'ExternalEventTriggered',
  ParallelExecutionStarted: 'ParallelExecutionStarted',
  ParallelExecutionCompleted: 'ParallelExecutionCompleted',
  ConcurrencyLimitExceeded: 'ConcurrencyLimitExceeded',
} as const;

export type EventTypeEnum = (typeof eventTypeEnum)[keyof typeof eventTypeEnum];
