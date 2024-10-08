export interface IConcurrencyManager<TTask> {
  setConcurrencyLimit(limit: number): void;
  canExecuteConcurrently(): boolean;
  registerTaskStart(task: TTask): void;
  registerTaskComplete(task: TTask): void;
}
