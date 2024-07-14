import { formStyle, pageStyle } from '@/page/login/passwordAuth/PasswordAuthPage.style';
import { PLACEHOLDER } from '@/page/signUp/info/constant';

import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

const PasswordAuthPage = () => {
  const navigate = useNavigate();

  return (
    <Flex css={pageStyle}>
      <Heading css={{ padding: '1.6rem 0' }}>비밀번호 재설정</Heading>
      <form css={formStyle}>
        <Flex styles={{ direction: 'column', width: '100%', gap: '3.2rem' }}>
          <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
            <Input variant="underline" label="회원 정보" placeholder={PLACEHOLDER.SCHOOL_EMAIL} />
            <Button css={{ width: '11.1rem' }} size="large" onClick={() => {}}>
              인증 메일 발송
            </Button>
          </Flex>
          <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
            <Input variant="underline" label="회원 정보" placeholder={PLACEHOLDER.SCHOOL_EMAIL} />
            <Button css={{ width: '13rem' }} size="large" onClick={() => {}}>
              인증하기
            </Button>
          </Flex>
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

export default PasswordAuthPage;
