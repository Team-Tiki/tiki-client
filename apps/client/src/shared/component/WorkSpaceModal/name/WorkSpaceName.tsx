import { Input } from '@tiki/ui';

import { useState } from 'react';

import { Modal } from '@/shared/component/Modal';
import { inputWrapperStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import { MAX_TEAM_NAME, WORKSPACE_MODAL } from '@/shared/constant';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const WorkSpaceName = () => {
  const { formData, setFormData } = useWorkSpaceContext();
  const { nextStep } = useFunnel();

  const [inputValue, setInputValue] = useState(formData.name);

  const isDisabled = inputValue.trim().length === 0;
  const isNameError = inputValue.length > MAX_TEAM_NAME;

  const handleNext = () => {
    setFormData({ name: inputValue });
    nextStep();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <Modal.Header step={1} totalSteps={4} />
      <Modal.Body>
        <div css={{ width: '100%', paddingTop: '2rem' }}>
          <Input
            placeholder="팀, 동아리, 조직 이름 입력"
            value={inputValue}
            onChange={handleInputChange}
            isError={isNameError}
            supportingText={isNameError ? WORKSPACE_MODAL.NAME : ''}
            maxLength={MAX_TEAM_NAME}
            css={inputWrapperStyle}
          />
        </div>
      </Modal.Body>
      <Modal.Footer step={1} type="create-workspace" onClick={handleNext} disabled={isDisabled} />
    </>
  );
};

export default WorkSpaceName;
