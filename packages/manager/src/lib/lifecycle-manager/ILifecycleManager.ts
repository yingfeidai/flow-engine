export interface ILifecycleManager<TContext = Record<string, unknown>, TStatus = string> {
  onStart?(context: TContext): Promise<void>;
  onStop?(context: TContext): Promise<void>;
  onComplete?(context: TContext): Promise<void>;
  onFail?(context: TContext): Promise<void>;
  onStatusChange?(
    context: TContext,
    oldStatus: TStatus,
    newStatus: TStatus
  ): Promise<void>;
}
