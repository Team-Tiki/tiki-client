import Button from '@/common/component/Button/Button';
import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';

import { formStyle, pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import { useInfoForm } from '@/page/signUp/info/hook/common/useInfoForm';

import { PLACEHOLDER } from '@/shared/constant/form';

const InfoFormPage = () => {
  const { info, handleInfoChange, handleSubmit } = useInfoForm();

  return (
    <Flex tag="main" css={pageStyle}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <Heading tag="H4">회원가입</Heading>
        <Flex styles={{ direction: 'column', gap: '2rem' }}>
          <Input
            name="name"
            value={info.name}
            onChange={handleInfoChange}
            label="이름"
            placeholder={PLACEHOLDER.NAME}
          />
          <DatePicker label="생년월일" variant="single" triggerWidth="100%" />

          <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem' }}>
            <Input
              name="password"
              value={info.password}
              onChange={handleInfoChange}
              placeholder={PLACEHOLDER.PASSWORD}
              label="비밀번호 설정"
            />
            <Input
              name="passwordChecker"
              value={info.passwordChecker}
              onChange={handleInfoChange}
              placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
            />
          </Flex>
        </Flex>
        <Button type="submit" size="xLarge" css={{ width: '100%' }}>
          다음
        </Button>
      </form>
    </Flex>
  );
};

export default InfoFormPage;
