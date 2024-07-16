export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN' as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
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
    HEADING: '아직 티키가 열심히 준비중이에요',
    TEXT: '더 좋은 서비스를 위해 조금만 기다려주세요!',
    REDIRECT: '쇼케이스 페이지로 돌아가기',
  },
} as const;
