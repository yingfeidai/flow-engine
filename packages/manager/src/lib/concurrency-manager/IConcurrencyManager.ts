export interface IConcurrencyManager {
  setMaxConcurrency(limit: number): Promise<void>;
  getCurrentConcurrency(): Promise<number>;
  getMaxConcurrency(): Promise<number>;
  startConcurrency(): Promise<void>;
  pauseConcurrency(): Promise<void>;
  resumeConcurrency(): Promise<void>;
  isConcurrencyActive(): Promise<boolean>;
}
