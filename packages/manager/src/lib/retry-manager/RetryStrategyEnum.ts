export const retryStrategyEnum = {
  FIXED: 'FIXED',
  EXPONENTIAL_BACKOFF: 'EXPONENTIAL_BACKOFF',
};
export type RetryStrategyEnum =
  (typeof retryStrategyEnum)[keyof typeof retryStrategyEnum];
