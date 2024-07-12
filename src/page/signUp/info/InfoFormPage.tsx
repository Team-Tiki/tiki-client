import { pageStyle, selectTriggerStyle } from '@/page/signUp/info/InfoFormPage.style';
import { PLACEHOLDER } from '@/page/signUp/info/constant';

import { useNavigate } from 'react-router-dom';

import ArrowDown from '@/common/asset/svg/arrow-down.svg?react';
import ArrowUp from '@/common/asset/svg/arrow-up.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

const InfoFormPage = () => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick(close);
  const navigate = useNavigate();

  return (
    <Flex css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '3.2rem', width: '50rem' }}>
        <Heading css={{ padding: '1.6rem 0' }}>회원가입</Heading>

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
                {isOpen ? <ArrowUp /> : <ArrowDown />}
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
          <Button
            type="button"
            variant="primary"
            size="large"
            css={{ marginTop: '14.8rem' }}
            onClick={() => navigate(`/password`)}>
            다음
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoFormPage;
