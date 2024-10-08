export interface ILifecycleManager<TContext> {
  onStart?(context: TContext): Promise<void>;
  onStop?(context: TContext): Promise<void>;
  onComplete?(context: TContext): Promise<void>;
  onFail?(context: TContext): Promise<void>;
  onStatusChange?(
    context: TContext,
    oldStatus: string,
    newStatus: string
  ): Promise<void>;
}
