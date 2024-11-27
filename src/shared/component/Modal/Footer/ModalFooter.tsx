import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { MODAL_CONTENTS, isModalContentType } from '@/shared/constant/modal';
import { useCloseModal, useModalContentType } from '@/shared/store/modal';

interface ModalFooterProps {
  step?: number;
  buttonClick?: () => void;
  isButtonActive?: boolean;
}

const ModalFooter = ({ step = 1, buttonClick, isButtonActive = true }: ModalFooterProps) => {
  const contentType = useModalContentType();
  const closeModal = useCloseModal();

  if (!isModalContentType(contentType)) return null;

  const modalContent = MODAL_CONTENTS[contentType];
  const buttons = modalContent.buttons[step - 1];

  return (
    <Flex styles={{ direction: 'row', justify: 'center', align: 'center', gap: '1.6rem' }}>
      {buttons.map((button: (typeof buttons)[number], index: number) => (
        <Button
          css={{ width: '100%' }}
          key={index}
          variant={button.variant}
          size="xLarge"
          onClick={button.text === '취소' ? closeModal : buttonClick}
          disabled={button.disabled || !isButtonActive}>
          {button.text}
        </Button>
      ))}
    </Flex>
  );
};

export default ModalFooter;
