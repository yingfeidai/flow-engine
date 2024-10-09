export interface IManagerSettable<TManagers> {
  setManagers(managers: Partial<TManagers>): Promise<void>;
}
