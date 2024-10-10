export interface IPluginManager<TContext = Record<string, unknown>> {
  runBeforeStart(context: TContext): Promise<void>;
  runAfterStart(context: TContext): Promise<void>;
  runBeforeComplete(context: TContext): Promise<void>;
  runAfterComplete(context: TContext): Promise<void>;
}
