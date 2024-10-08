export interface IDispatcherManager<TData> {
  dispatch(data: TData): Promise<void>;
  dispatchBatch(dataArray: TData[]): Promise<void>;
}
