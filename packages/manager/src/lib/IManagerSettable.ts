export interface IManagerSettable<TManagers extends Record<string, unknown>> {
  setManagers(managers: Partial<TManagers>): Promise<void>;
}
