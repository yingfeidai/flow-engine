export const cloudProviderEnum = {
  AWS: 'AWS',
  AZURE: 'AZURE',
  GOOGLE: 'GOOGLE',
} as const;

export type CloudProviderEnum =
  (typeof cloudProviderEnum)[keyof typeof cloudProviderEnum];
