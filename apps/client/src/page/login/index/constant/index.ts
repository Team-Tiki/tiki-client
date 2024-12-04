import { HTTP_STATUS_CODE } from '@/shared/constant/api';

export const ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.BAD_REQUEST]: '비밀번호가 잘못되었습니다',
  [HTTP_STATUS_CODE.NOT_FOUND]: '등록되지 않은 이메일이에요',
  OTHER: '로그인에 실패하였어요',
};
