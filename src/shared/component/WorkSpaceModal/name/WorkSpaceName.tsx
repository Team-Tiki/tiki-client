import { useState } from 'react';

import Input from '@/common/component/Input/Input';
import { Modal } from '@/common/component/Modal';

import { inputWrapperStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import { useFunnel } from '@/shared/hook/common/funnelContext';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const WorkSpaceName = () => {
  const [inputValue, setInputValue] = useState('');
  const { setFormData } = useWorkSpaceContext();

  const { nextStep } = useFunnel();

  const handleNext = () => {
    console.log('Next button clicked'); // 디버깅용
    setFormData({ name: inputValue });
    nextStep();
  };

  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Modal.Header step={1} totalSteps={4} />
      <Modal.Body>
        <Input
          placeholder="팀, 동아리, 조직 이름 입력"
          value={inputValue}
          onChange={handleInputChange}
          css={inputWrapperStyle}
        />
      </Modal.Body>
      <Modal.Footer step={1} buttonClick={handleNext} isButtonActive={isButtonActive} />
    </>
  );
};

export default WorkSpaceName;
