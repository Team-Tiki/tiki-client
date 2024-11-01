import { useState } from 'react';

import Input from '@/common/component/Input/Input';
import { Modal } from '@/common/component/Modal';

import { inputWrapperStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

interface WorkSpaceNameProps {
  isVisible: boolean;
}

const WorkSpaceName = ({ isVisible }: WorkSpaceNameProps) => {
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

  if (!isVisible) return null;

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
