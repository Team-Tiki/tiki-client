import { formStyle, pageStyle } from '@/page/login/passwordReset/PasswordResetPage.style';
import { PLACEHOLDER, SUPPORTINGTXT } from '@/page/signUp/info/constant';

import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

const PasswordResetPage = () => {
  const navigate = useNavigate();

  return (
    <Flex css={pageStyle}>
      <form css={formStyle}>
        <Heading css={{ padding: '1.6rem 0' }}>비밀번호 재설정</Heading>
        <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
          <Input
            variant="underline"
            label="회원 정보"
            placeholder={PLACEHOLDER.SCHOOL_EMAIL}
            supportingText={SUPPORTINGTXT.AUTH_CODE}
          />
          <Input variant="underline" placeholder={PLACEHOLDER.AUTH_CODE} />
        </Flex>
        <Button
          type="button"
          variant="primary"
          size="large"
          css={{ marginTop: '46rem' }}
          onClick={() => navigate(`/login`)}>
          완료
        </Button>
      </form>
    </Flex>
  );
};

export default PasswordResetPage;
