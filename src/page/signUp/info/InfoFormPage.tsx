import { identifyStyle, pageStyle, selectTriggerStyle, timestyle } from '@/page/signUp/info/InfoFormPage.style';
import { PLACEHOLDER } from '@/page/signUp/info/constant';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { useEffect, useState } from 'react';
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
  const [isMailSent, setIsMailSent] = useState(false);
  const [remainTime, setRemainTime] = useState(180);
  const ref = useOutsideClick(close);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainTime]);

  return (
    <Flex css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '3.2rem', width: '51.1rem' }}>
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

          <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
            <Input variant="underline" label="학교 인증" placeholder={PLACEHOLDER.VERIFY} />
            <Button
              css={{ width: '11.1rem' }}
              size="large"
              onClick={() => {
                setIsMailSent(true);
              }}>
              인증 메일 발송
            </Button>
          </Flex>

          <Flex css={identifyStyle(isMailSent)}>
            <Input variant="underline" placeholder={PLACEHOLDER.AUTH_CODE} />
            <span css={timestyle}>{formatTime(remainTime)}</span>
            <Button
              css={{ width: '13rem' }}
              size="large"
              onClick={() => {
                setIsMailSent(true);
              }}>
              인증하기
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
