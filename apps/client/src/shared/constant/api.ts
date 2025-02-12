export const STORAGE_KEY = {
  ACCESS_TOKEN_KEY: 'ACCESS_TOKEN',
  REFRESH_TOKEN_KEY: 'REFRESH_TOKEN',
  INVITATION_ID: 'INVITATION_ID',
  INVITE_TEAM_ID: 'INVITE_TEAM_ID',
  TEAM_ID: 'TEAM_ID',
  TEAM_NAME: 'TEAM_NAME',
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '오류가 발생했어요',
    TEXT: '잠시 후에 다시 시도해주세요',
    REDIRECT: '다시 접속하기',
  },
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: '길을 잃었나요 ?',
    TEXT: '요청하신 페이지를 찾을 수 없습니다.',
    REDIRECT: '쇼케이스 페이지로 돌아가기',
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: '잘못된 요청입니다.',
    TEXT: '확인 후 다시 시도해주세요.',
    REDIRECT: '쇼케이스 페이지로 돌아가기',
  },
} as const;
