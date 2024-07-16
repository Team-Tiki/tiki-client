interface ValidateInputProps {
  email?: string;
  authCode?: string;
}

export const validateInput = ({ email = '', authCode = '' }: ValidateInputProps) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const isEmailValid = email.trim().length > 0 && emailPattern.test(email.trim());
  const isAuthCodeValid = authCode.trim().length > 0 && authCode.trim().length === 6;

  return {
    isEmailValid,
    isAuthCodeValid,
  };
};
