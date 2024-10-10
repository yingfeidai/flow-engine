export interface ISchedulerCoordinatorManager {
  coordinate<TId1, TId2>(id1: TId1, id2: TId2): Promise<void>;
}
