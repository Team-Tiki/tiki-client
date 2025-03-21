export const hasKeyInObject = <T extends object>(object: T, key: string | number | symbol): key is keyof T => {
  return Object.hasOwn(object, key);
};

export const isNil = <T>(value: T | undefined | null): value is null | undefined => {
  return value == null;
};
