import { Button, Flex, Heading, Input, Select } from '@tiki/ui';

import { formStyle, pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { timeStyle } from '@/page/signUp/info/UnivFormPage.style';
import { useSendMail } from '@/page/signUp/info/hook/api/useSendMail';
import { useUnivForm } from '@/page/signUp/info/hook/common/useUnivForm';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { PLACEHOLDER } from '@/shared/constant/form';

const UnivFormPage = () => {
  const { inputs, handleChange, handleSubmit, select, isSelectOpen, selectToggle } = useUnivForm();

  const { send, remainTime, isVerified } = useSendMail(inputs.email);

  const options = [
    {
      value: '건국대학교',
    },
    {
      value: '인하대학교',
    },
  ];

  return (
    <Flex tag="main" css={pageStyle}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <Heading tag="H4">회원가입</Heading>
        <Flex styles={{ direction: 'column', gap: '1.6rem' }}>
          <Select
            isOpen={isSelectOpen}
            onTrigger={selectToggle}
            variant="outline"
            label="학교"
            placeholder={PLACEHOLDER.SCHOOL}
            options={options}
            onSelect={select}
          />
          <Flex styles={{ gap: '0.4rem', width: '100%', align: 'end', marginTop: '0.4rem' }}>
            <Input
              value={inputs.email}
              onChange={(e) => handleChange(e, 'email')}
              label="학교 인증"
              placeholder={PLACEHOLDER.SCHOOL_EMAIL}
              supportingText="메일함에서 인증 번호를 확인해주세요"
            />
            <Button
              onClick={() => send()}
              variant="outline"
              size="large"
              css={{ minWidth: '10rem', marginBottom: '1.88rem' }}>
              인증 메일 전송
            </Button>
          </Flex>
          {isVerified ? (
            <Flex styles={{ gap: '0.4rem', width: '100%', align: 'center' }}>
              <div css={{ width: '100%', position: 'relative' }}>
                <Input
                  type="password"
                  maxLength={6}
                  value={inputs.code}
                  onChange={(e) => handleChange(e, 'code')}
                  placeholder={PLACEHOLDER.AUTH_CODE}
                />
                <span css={timeStyle}>{formatTime(remainTime)}</span>
              </div>
              <Button variant="outline" size="large" css={{ minWidth: '10rem' }}>
                인증하기
              </Button>
            </Flex>
          ) : (
            <div css={{ height: '4rem' }} />
          )}
        </Flex>
        <Button type="submit" size="xLarge" css={{ width: '100%' }}>
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default UnivFormPage;
