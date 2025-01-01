import { Button, Flex, Input } from '@tiki/ui';

import { useState } from 'react';

import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import {
  buttonStyle,
  inputWrapperStyle,
  sectionStyle,
} from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const WorkSpaceName = () => {
  const [inputValue, setInputValue] = useState('');

  const { setFormData } = useWorkSpaceContext();
  const { nextStep } = useFunnel();

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
