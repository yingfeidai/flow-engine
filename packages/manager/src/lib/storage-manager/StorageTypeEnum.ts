export const storageTypeEnum = {
  DATABASE: 'Database',
  FILESYSTEM: 'Filesystem',
  CLOUD: 'Cloud',
} as const;

export type StorageTypeEnum = typeof storageTypeEnum[keyof typeof storageTypeEnum];
