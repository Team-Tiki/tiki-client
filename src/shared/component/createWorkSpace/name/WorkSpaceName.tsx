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
import { useModalStore } from '@/shared/store/modal';
import Modal from '@/common/component/Modal/Modal';

interface WorkSpaceNameProps {
  onNext: () => void;
  setName: (name: string) => void;
}

const WorkSpaceName = ({ onNext, setName }: WorkSpaceNameProps) => {
  const [inputValue, setInputValue] = useState('');
  const { workspaceModal, openModal, closeModal } = useModalStore();

  const handleNext = () => {
    setName(inputValue);
    closeModal('work')


  };

  const isButtonActive = inputValue.trim().length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Modal isOpen={}>

    
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
    </Modal>
  );
};

export default WorkSpaceName;
