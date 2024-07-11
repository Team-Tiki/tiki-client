import { selectTriggerStyle } from '@/page/signIn/info/InfoFormPage.style';
import { PLACEHOLDER } from '@/page/signIn/info/constant';

import ArrowDown from '@/common/asset/svg/arrow-down.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

const InfoFormPage = () => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick(close);

  return (
    <Flex tag="section" styles={{ direction: 'column', gap: '4.8rem', width: '50rem' }}>
      <Heading>회원가입</Heading>

      <Flex tag="form" styles={{ direction: 'column', gap: '3.2rem', width: '100%' }}>
        <Input variant="underline" label="이름" placeholder={PLACEHOLDER.NAME} />
        <Input variant="underline" label="생년월일" placeholder={PLACEHOLDER.BIRTHDAY} />

        <Select
          css={{ width: '100%' }}
          ref={ref}
          label="학교"
          isOpen={isOpen}
          trigger={
            <button type="button" css={selectTriggerStyle} onClick={toggle}>
              {PLACEHOLDER.SCHOOL}
              <ArrowDown />
            </button>
          }
          options={['인하대학교', '건국대학교', '숙명여자대학교', '시립대학교', '중앙대학교']}
        />

        <Flex styles={{ align: 'end', justify: 'space-between', width: '100%' }}>
          <Input variant="underline" label="학교 인증" placeholder={PLACEHOLDER.VERIFY} />
          <Button css={{ width: '12rem' }} size="large">
            인증 메일 발송
          </Button>
        </Flex>

        <Flex styles={{ direction: 'column', width: '100%' }}>
          <Input variant="underline" label="비밀번호 설정" placeholder={PLACEHOLDER.PASSWORD} />
          <Input variant="underline" placeholder={PLACEHOLDER.PASSWORD_CONFIRM} />
        </Flex>

        <Button type="button" variant="primary" size="large">
          회원가입 완료
        </Button>
      </Flex>
    </Flex>
  );
};

export default InfoFormPage;
