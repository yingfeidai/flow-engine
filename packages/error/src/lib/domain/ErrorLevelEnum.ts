export const errorLevelEnum = {
  INFO: 'Info',
  WARNING: 'Waring',
  ERROR: 'Error',
  CRITICAL: 'Critical',
} as const;

export type ErrorLevelEnum =
  (typeof errorLevelEnum)[keyof typeof errorLevelEnum];
