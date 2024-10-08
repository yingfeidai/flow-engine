import { CloudProviderEnum } from './CloudProviderEnum';
import { StorageTypeEnum } from './StorageTypeEnum';

export interface IDatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  databaseName: string;
}

export interface IFilesystemConfig {
  filePath: string;
  maxFileSize: number;
  backupRetentionDays: number;
}

export interface ICloudConfig<TCloudProvider> {
  provider: TCloudProvider;
  bucketName: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export interface IStorageConfig<
  TStorageType = StorageTypeEnum,
  TCloudProvider = CloudProviderEnum,
  TCustomConfig = unknown
> {
  storageType: TStorageType; 

  databaseConfig?: IDatabaseConfig;
  filesystemConfig?: IFilesystemConfig;
  cloudConfig?: ICloudConfig<TCloudProvider>;

  customConfig?: TCustomConfig;
}
