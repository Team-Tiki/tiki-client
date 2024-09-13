import { UNIV_EMAIL_FORMAT } from '../constant/form';

export const validateEmail = (email: string) => {
  return email.trim().length > 0 && UNIV_EMAIL_FORMAT.test(email.trim());
};

export const validateCode = (authCode: string) => {
  return authCode.trim().length > 0 && authCode.trim().length === 6;
};
