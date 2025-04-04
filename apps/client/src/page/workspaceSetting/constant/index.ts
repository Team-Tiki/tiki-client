export const MAX_NAME_LENGTH = 32;

export const MAX_WORKSPACE_NAME_LENGTH = 30;

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

export const POSITION_SELECT_OPTIONS = [{ value: POSITION_VALUE.ADMIN }, { value: POSITION_VALUE.EXECUTIVE }];

export const UNIVERCITY_SELECT_OPTIONS = [{ value: '건국대학교' }];
