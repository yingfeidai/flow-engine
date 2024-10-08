export interface IManagerInjectable<TManagers> {
  setManagers(managers: Partial<TManagers>): Promise<void>;
}
