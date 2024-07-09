import WorkSapceInfo from '@/page/modal/component/workspace/info/WorkSpaceInfo';
import {
  buttonStyle,
  inputWrapperStyle,
  sectionStyle,
} from '@/page/modal/component/workspace/name/WorkSpaceName.style';

import { useEffect, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Input from '@/common/component/Input/Input';

interface WorkSpaceNameProps {}

const WorkSpaceName = ({}: WorkSpaceNameProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsButtonActive(inputValue.trim().length > 0);
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section css={sectionStyle}>
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
      <Button variant="primary" size="medium" css={buttonStyle(isButtonActive)} disabled={!isButtonActive}>
        다음
      </Button>
    </section>
  );
};

export default WorkSpaceName;
