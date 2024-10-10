export const lockTypeEnum = {
  OPTIMISTIC: 'OPTIMISTIC',
  PESSIMISTIC: 'PESSIMISTIC',
} as const;

export type LockTypeEnum = (typeof lockTypeEnum)[keyof typeof lockTypeEnum];
