export type StateTransition<T> = {
  from: T;
  to: T;
  validator?: () => boolean;
};
