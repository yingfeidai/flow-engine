export const workflowStatusEnum = {
  PENDING: 'Pending',
  RUNNING: 'Running',
  COMPLETED: 'Completed',
  FAILED: 'Failed',
};

export type WorkflowStatusEnum = typeof workflowStatusEnum[keyof typeof workflowStatusEnum];
