export const storageTypeEnum = {
  DATABASE: 'DATABASE',
  FILESYSTEM: 'FILESYSTEM',
  CLOUD: 'CLOUD',
} as const;

export type StorageTypeEnum =
  (typeof storageTypeEnum)[keyof typeof storageTypeEnum];
