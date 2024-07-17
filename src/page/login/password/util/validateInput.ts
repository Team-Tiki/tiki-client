export const validateEmail = (email: string) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const isEmailValid = email.trim().length > 0 && emailPattern.test(email.trim());

  return isEmailValid;
};

export const validateCode = (authCode: string) => {
  const isAuthCodeValid = authCode.trim().length > 0 && authCode.trim().length === 6;

  return isAuthCodeValid;
};
