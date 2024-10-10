export const logLevelEnum = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL',
} as const;

export type LogLevelEnum = (typeof logLevelEnum)[keyof typeof logLevelEnum];
