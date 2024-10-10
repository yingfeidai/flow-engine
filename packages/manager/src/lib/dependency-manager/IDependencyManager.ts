export interface IDependencyManager<T> {
  canExecute(entity: T): boolean;
  addDependency(
    entity: T,
    dependsOn: T,
    condition?: (dependsOn: T) => boolean
  ): void;
  areDependenciesMet(entity: T): boolean;
}
