export const taskStatusEnum = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
};

export type TaskStatusEnum =
  (typeof taskStatusEnum)[keyof typeof taskStatusEnum];
