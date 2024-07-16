import { useMutation } from '@tanstack/react-query';

import { postSignup } from '@/shared/api/signup/info';
import { UserInfo } from '@/shared/api/signup/info/type';

export const useSignupMutation = () => {
  const signUpMutation = useMutation({
    mutationFn: (formData: UserInfo) => postSignup(formData),
  });

  return signUpMutation;
};
