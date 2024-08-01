export const validateEmail = (email: string) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return email.trim().length > 0 && emailPattern.test(email.trim());
};

export const validateCode = (authCode: string) => {
  return authCode.trim().length > 0 && authCode.trim().length === 6;
};
