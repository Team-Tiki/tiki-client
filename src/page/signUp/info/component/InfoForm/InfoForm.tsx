import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import { useOutsideClick } from '@/common/hook';

import { formStyle, identifyStyle, timeStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';
import { useSendMailMutation } from '@/page/signUp/info/hook/api/useSendMailMutation';
import { useInfoForm } from '@/page/signUp/info/hook/common/useInfoForm';
import { useTimer } from '@/page/signUp/info/hook/common/useTimer';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import {
  AUTHCODE_MAXLENGTH,
  EMAIL_REMAIN_TIME,
  PLACEHOLDER,
  SUPPORTING_TEXT,
  UNIV_EMAIL_FORMAT,
} from '@/shared/constant/form';
import { useToastAction } from '@/shared/store/toast';
import { validateCode, validateEmail } from '@/shared/util/validate';

const InfoForm = () => {
  const {
    info,
    handleInfoChange,
    handleBirthChange,
    handleUnivSelect,
    handleSubmit,
    verityCodeMutate,
    isVerified,
    isSelectOpen,
    onSelectClose,
    onSelectToggle,
    error,
  } = useInfoForm();

  const ref = useOutsideClick(onSelectClose);

  console.log(info);

  const {
    remainTime,
    isTriggered: isMailSent,
    handleTrigger: onSend,
    handleReset: onTimerReset,
    handleFail: onFail,
    handleStop: onStop,
  } = useTimer(EMAIL_REMAIN_TIME, SUPPORTING_TEXT.EMAIL_EXPIRED);

  const { mutate: sendMailMutate } = useSendMailMutation(info.email, onFail);

  if (isVerified) onStop();

  const { createToast } = useToastAction();

  const handleMailSend = () => {
    if (!UNIV_EMAIL_FORMAT.test(info.email)) {
      createToast(SUPPORTING_TEXT.EMAIL_INVALID, 'error');

      return;
    }
    if (isMailSent) {
      onTimerReset();
    }

    onSend();

    sendMailMutate();
  };

  const univOptions = [
    { value: '인하대학교' },
    { value: '건국대학교' },
    { value: '숙명여자대학교' },
    { value: '시립대학교' },
    { value: '중앙대학교' },
  ];

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <Flex styles={{ direction: 'column', gap: '3.2rem' }}>
        <Input
          name="name"
          value={info.name}
          onChange={handleInfoChange}
          isError={Boolean(error.name)}
          label="이름"
          placeholder={PLACEHOLDER.NAME}
        />
        <Input
          value={info.birth}
          onChange={handleBirthChange}
          isError={Boolean(error.birth)}
          label="생년월일"
          placeholder={PLACEHOLDER.BIRTHDAY}
        />

        <Select
          css={{ width: '100%' }}
          ref={ref}
          label="학교"
          placeholder="소속 학교 선택"
          variant="underline"
          onTrigger={onSelectToggle}
          onSelect={handleUnivSelect}
          isOpen={isSelectOpen}
          options={univOptions}
        />

        <Flex styles={{ align: 'end', justify: 'space-between', width: '100%', gap: '0.8rem' }}>
          <Input
            name="email"
            value={info.email}
            onChange={handleInfoChange}
            isError={Boolean(error.email)}
            label="학교 인증"
            placeholder={PLACEHOLDER.VERIFY}
          />
          <Button
            css={{ padding: '1rem 1.6rem', width: '11rem' }}
            size="large"
            onClick={handleMailSend}
            disabled={!validateEmail(info.email) || isVerified}>
            인증 메일 발송
          </Button>
        </Flex>
        {isMailSent && (
          <Flex css={identifyStyle} styles={{ align: 'end', justify: 'space-between', gap: '0.8rem' }}>
            <Input
              name="authCode"
              value={info.authCode}
              maxLength={AUTHCODE_MAXLENGTH}
              onChange={handleInfoChange}
              placeholder={PLACEHOLDER.AUTH_CODE}
            />
            <span css={timeStyle}>{formatTime(remainTime)}</span>
            <Button
              css={{ padding: '1rem 1.6rem', width: '13rem' }}
              size="large"
              onClick={() => verityCodeMutate()}
              disabled={!validateCode(info.authCode)}>
              인증하기
            </Button>
          </Flex>
        )}
      </Flex>
      <Button type="submit" variant="primary" size="large">
        다음
      </Button>
    </form>
  );
};

export default InfoForm;
