import { useLocation } from 'react-router-dom';

import InfoFormPage from '@/page/signUp/info/InfoFormPage';
import UnivFormPage from '@/page/signUp/info/UnivFormPage';

import { components } from '@/shared/__generated__/schema';

export type SignupForm = components['schemas']['MemberProfileCreateRequest'];

export type UnivForm = Pick<SignupForm, 'email' | 'univ'>;

const SignUpPage = () => {
  const pathname = useLocation().search;
  const step = new URLSearchParams(pathname).get('step');

  return (
    <div>
      {step === '1' && <UnivFormPage />}
      {step === '2' && <InfoFormPage />}
    </div>
  );
};

export default SignUpPage;
