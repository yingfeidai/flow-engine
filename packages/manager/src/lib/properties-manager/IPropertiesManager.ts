export interface IPropertiesManager<TProperties> {
  getProperties(): TProperties; 
  setProperties(properties: Partial<TProperties>): Promise<void>; 
  extendProperties(properties: Record<string, string | number | boolean | Date>): Promise<void>; 
}
