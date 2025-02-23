import { Button, DatePicker, Flex, Heading, Input, Label, SupportingText } from '@tiki/ui';

import { formUnivStyle, pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { useInfoForm } from '@/page/signUp/info/hook/common/useInfoForm';

import { PLACEHOLDER } from '@/shared/constant/form';

const InfoFormPage = () => {
  const {
    info,
    error,
    disabled,
    dateisInvalid,
    validMessage,
    handleInfoChange,
    updateCheckerMessage,
    updatePasswordMessage,
    handleBirthChange,
    handleSubmit,
  } = useInfoForm();

  return (
    <Flex tag="main" css={pageStyle}>
      <form onSubmit={handleSubmit} css={formUnivStyle}>
        <Heading tag="H4">회원가입</Heading>
        <Flex styles={{ direction: 'column', gap: '2rem' }}>
          <Input
            name="name"
            value={info.name}
            onChange={handleInfoChange}
            label="이름"
            placeholder={PLACEHOLDER.NAME}
          />
          <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
            <Label id="birth">생년월일</Label>
            <Flex styles={{ direction: 'column', gap: '0.2rem' }}>
              <DatePicker onChange={handleBirthChange} variant="single" triggerWidth="100%" />
              {dateisInvalid && <SupportingText isError={true}>생년월일을 다시 확인해주세요.</SupportingText>}
            </Flex>
          </Flex>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
            <Input
              name="password"
              value={info.password}
              onChange={handleInfoChange}
              onBlur={updatePasswordMessage}
              placeholder={PLACEHOLDER.PASSWORD}
              label="비밀번호 설정"
              isSuccess={!!validMessage.password}
              isError={!!error.password}
              supportingText={error.password || validMessage.password}
            />
            <Input
              name="passwordChecker"
              value={info.passwordChecker}
              onChange={handleInfoChange}
              onBlur={updateCheckerMessage}
              placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
              isSuccess={!!validMessage.passwordChecker}
              isError={!!error.passwordChecker}
              supportingText={error.passwordChecker || validMessage.passwordChecker}
            />
          </Flex>
        </Flex>
        <Button disabled={disabled} type="submit" size="xLarge" css={{ width: '100%' }}>
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default InfoFormPage;
