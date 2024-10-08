import { CloudProviderEnum } from './CloudProviderEnum';
import { IStorageConfig } from './IStorageConfig';
import { StorageTypeEnum } from './StorageTypeEnum';

// TODO: set default type to ts-sql-toolkit WhereOptionsType
export interface IFilter<TItem, TWhere = unknown> {
  filter(conditions: TWhere): TItem[];
}

export interface IStorageManager<
  TItem = unknown,
  TFilter = IFilter<TItem, unknown>,
  TStorageType = StorageTypeEnum,
  TCloudProvider = CloudProviderEnum
> {
  setConfig(config: IStorageConfig<TStorageType, TCloudProvider>): void;
  getConfig(): IStorageConfig<TStorageType, TCloudProvider>;

  addItem(item: TItem): Promise<void>;
  removeItem(itemId: string): Promise<void>;
  getItem(itemId: string): Promise<TItem>;
  getAllItems(): Promise<TItem[]>;
  filterItems(filter: TFilter): Promise<TItem[]>;

  exportItems(): Promise<void>;
  clear(): Promise<void>;
}
