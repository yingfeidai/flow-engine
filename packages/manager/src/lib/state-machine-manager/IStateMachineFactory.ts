import { IStateMachine } from './IStateMachine';
import { StateTransition } from './StateMachineType';

export interface IStateMachineFactory<T> {
  createStateMachine(
    initialState: T,
    transitions: StateTransition<T>[]
  ): IStateMachine<T>;
}
