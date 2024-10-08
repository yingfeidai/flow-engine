export interface IPluginManager<TContext = string> {
  runBeforeStart(context: TContext): Promise<void>;
  runAfterStart(context: TContext): Promise<void>;
  runBeforeComplete(context: TContext): Promise<void>;
  runAfterComplete(context: TContext): Promise<void>;
}
