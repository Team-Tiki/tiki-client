import { ERROR_NAME } from '@/page/workspaceSetting/constant';

import { SUPPORTING_TEXT } from '@/shared/constant/form';

// 팀 이름 변경 후 30일 지났는지 알려주는 함수
export const hasRecentUpdates = (updateDate: string) => {
  const date = new Date(updateDate);
  const now = new Date();
  date.setDate(date.getDate() + 30);

  return now > date;
};

export const defineSupportigtext = (errorName: string) => {
  if (errorName === ERROR_NAME.VALIDATE) {
    return SUPPORTING_TEXT.NICKNAME_NOTICE;
  }
  if (errorName === ERROR_NAME.EMPTY) {
    return SUPPORTING_TEXT.NICKNAME_NOTICE;
  }
  if (errorName === ERROR_NAME.OVER_LENGTH) {
    return SUPPORTING_TEXT.NICKNAME_OVER_LENGTH;
  }
};
