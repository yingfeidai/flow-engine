export interface IBaseProperties {
  readonly id: string;
  createdAt: Date;
  updatedAt: Date;
  customData?: Record<string, string | number | boolean | Date> | null;
}
