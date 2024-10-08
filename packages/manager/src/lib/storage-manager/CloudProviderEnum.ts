export const cloudProviderEnum = {
  AWS: 'Aws',
  AZURE: 'Azure',
  GOOGLE: 'Google',
} as const;

export type CloudProviderEnum = typeof cloudProviderEnum[keyof typeof cloudProviderEnum];
