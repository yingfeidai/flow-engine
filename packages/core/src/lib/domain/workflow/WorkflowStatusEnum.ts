export const workflowStatusEnum = {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
};

export type WorkflowStatusEnum =
  (typeof workflowStatusEnum)[keyof typeof workflowStatusEnum];
