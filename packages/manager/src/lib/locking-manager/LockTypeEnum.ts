export const lockTypeEnum = {
  OPTIMISTIC: 'Optimistic',
  PESSIMISTIC: 'Pessimistic',
} as const;

export type LockTypeEnum = (typeof lockTypeEnum)[keyof typeof lockTypeEnum];
