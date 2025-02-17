export const MAX_NAME_LENGTH = 32;

export const ERROR_NAME = {
  VALIDATE: 'VALIDATE',
  EMPTY: 'EMPTY',
  OVER_LENGTH: 'OVER_LENGTH',
};

export const POSITION = {
  ADMIN: 'ADMIN',
  EXECUTIVE: 'EXECUTIVE',
  MEMBER: 'MEMBER',
} as const;

export const POSITION_VALUE = {
  ADMIN: '관리자',
  EXECUTIVE: '임원진',
  MEMBER: '멤버',
};

export const SELECT_OPTIONS = [{ value: POSITION_VALUE.ADMIN }, { value: POSITION_VALUE.EXECUTIVE }];
