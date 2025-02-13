import { components } from '@/shared/__generated__/schema';

export const convertDataUnit = (data?: components['schemas']['UsageGetResponse']) => {
  const capacity = (data?.capacity || 0) / 1024 / 1024 / 1024;
  const availableUsage = capacity - (data?.usage || 0) / 1024 / 1024;

  const modifiedCapacity = Math.ceil(capacity * 1000) / 1000;
  const modifiedAvailableUsage = Math.ceil(availableUsage * 1000) / 1000;

  return { modifiedCapacity, modifiedAvailableUsage };
};
