import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import { useCloseModal, useModalContentType } from '@/shared/store/modal';
import { getFooterContent } from '@/shared/util/modalFooter';

interface ModalFooterProps {
  step?: number;
  buttonClick?: () => void;
  isButtonActive?: boolean;
}

const ModalFooter = ({ step, buttonClick, isButtonActive }: ModalFooterProps) => {
  const contentType = useModalContentType();
  const closeModal = useCloseModal();
  const footerButtons = getFooterContent(contentType!, step!, buttonClick, closeModal, isButtonActive);

  return (
    <Flex styles={{ direction: 'row', justify: 'center', align: 'center', gap: '1.6rem' }}>
      {footerButtons.map((button, index) => (
        <Button
          css={{ width: '100%' }}
          key={index}
          variant={button.variant}
          size="xLarge"
          onClick={button.onClick}
          disabled={button.disabled}>
          {button.text}
        </Button>
      ))}
    </Flex>
  );
};

export default ModalFooter;
