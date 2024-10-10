import { RetryStrategyEnum } from './RetryStrategyEnum';

export interface IRetryManager<TType = RetryStrategyEnum> {
  setRetryLimit(limit: number): void;
  shouldRetry(taskId: string): boolean;
  registerFailure(taskId: string): void;
  getRetryDelay(taskId: string): number;
  setRetryStrategy(strategy: TType): void;
}
