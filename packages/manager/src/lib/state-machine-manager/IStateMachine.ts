export interface IStateMachine<T> {
  getState(): T;
  canTransition(to: T): boolean;
  transitionTo(to: T): void;
}
