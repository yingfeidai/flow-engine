export const taskStatusEnum = {
  PENDING: 'Pending',
  IN_PROGRESS: 'InProgress',
  COMPLETED: 'Completed',
  FAILED: 'Failed',
};

export type TaskStatusEnum =
  (typeof taskStatusEnum)[keyof typeof taskStatusEnum];
