export const retryStrategyEnum = {
  FIXED: 'Fixed',
  EXPONENTIAL_BACKOFF: 'ExponentialBackoff',
};
export type RetryStrategyEnum =
  (typeof retryStrategyEnum)[keyof typeof retryStrategyEnum];
