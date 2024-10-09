export const errorLevelEnum = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL',
} as const;

export type ErrorLevelEnum =
  (typeof errorLevelEnum)[keyof typeof errorLevelEnum];
