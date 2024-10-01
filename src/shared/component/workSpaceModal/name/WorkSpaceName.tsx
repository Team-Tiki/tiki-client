import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import WorkSapceInfo from '@/shared/component/workSpaceModal/info/WorkSpaceInfo';
import {
  buttonStyle,
  inputWrapperStyle,
  sectionStyle,
} from '@/shared/component/workSpaceModal/name/WorkSpaceName.style';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

interface WorkSpaceNameProps {
  isVisible: boolean;
}

const WorkSpaceName = ({ isVisible }: WorkSpaceNameProps) => {
  if (!isVisible) return null;

  const [inputValue, setInputValue] = useState('');
  const { setFormData, nextStep } = useWorkSpaceContext();

  const handleNext = () => {
    setFormData({ name: inputValue });
    nextStep();
  };

  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo step="name" title="새로운 워크 스페이스 생성하기" info="워크스페이스의 이름을 입력해주세요." />
      <article css={{ marginTop: '2.4rem', width: '32rem' }}>
        <Input
          variant="default"
          size="large"
          placeholder="팀,동아리,조직 이름 입력"
          value={inputValue}
          onChange={handleInputChange}
          css={inputWrapperStyle}
        />
      </article>
      <Button
        variant="primary"
        size="medium"
        css={buttonStyle(isButtonActive)}
        disabled={!isButtonActive}
        onClick={handleNext}>
        다음
      </Button>
    </Flex>
  );
};

export default WorkSpaceName;
