import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import { useUnivForm } from '@/page/signUp/info/hook/common/useUnivForm';

import { PLACEHOLDER } from '@/shared/constant/form';

const UnivForm = () => {
  const { inputs, isVerfied, setIsVerified, handleChange } = useUnivForm();

  return (
    <Flex styles={{ direction: 'column', gap: '1.6rem' }}>
      <Input label="학교" placeholder={PLACEHOLDER.SCHOOL} />

      <Flex styles={{ gap: '0.4rem', width: '100%', align: 'end', marginTop: '0.4rem' }}>
        <Input
          value={inputs.email}
          onChange={(e) => handleChange(e, 'email')}
          label="학교 인증"
          placeholder={PLACEHOLDER.SCHOOL_EMAIL}
          supportingText="메일함에서 인증 번호를 확인해주세요"
        />
        <Button
          onClick={() => setIsVerified((prev) => !prev)}
          variant="outline"
          size="large"
          css={{ minWidth: '10rem', marginBottom: '1.88rem' }}>
          인증 메일 전송
        </Button>
      </Flex>
      {isVerfied ? (
        <Flex styles={{ gap: '0.4rem', width: '100%', align: 'center' }}>
          <Input
            type="password"
            value={inputs.code}
            onChange={(e) => handleChange(e, 'code')}
            placeholder={PLACEHOLDER.AUTH_CODE}
          />
          <Button variant="outline" size="large" css={{ minWidth: '10rem' }}>
            인증하기
          </Button>
        </Flex>
      ) : (
        <div css={{ height: '4rem' }} />
      )}
    </Flex>
  );
};

export default UnivForm;
