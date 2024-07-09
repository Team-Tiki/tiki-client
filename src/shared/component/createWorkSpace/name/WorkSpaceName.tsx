import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import {
  buttonStyle,
  inputWrapperStyle,
  sectionStyle,
} from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';

interface WorkSpaceNameProps {
  onNext: () => void;
}

const WorkSpaceName = ({ onNext }: WorkSpaceNameProps) => {
  const [inputValue, setInputValue] = useState('');

  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo step={1} title="새로운 워크 스페이스 생성하기" info="워크스페이스의 이름을 입력해주세요." />
      <div css={inputWrapperStyle}>
        <Input
          variant="default"
          size="large"
          placeholder="팀,동아리,조직 이름 입력"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <Button
        variant="primary"
        size="medium"
        css={buttonStyle(isButtonActive)}
        disabled={!isButtonActive}
        onClick={onNext}>
        다음
      </Button>
    </Flex>
  );
};

export default WorkSpaceName;
