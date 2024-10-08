export const logLevelEnum = {
  DEBUG: 'Debug',
  INFO: 'Info',
  WARNING: 'Warning',
  ERROR: 'Error',
  CRITICAL: 'Critical',
} as const;

export type LogLevelEnum = (typeof logLevelEnum)[keyof typeof logLevelEnum];
