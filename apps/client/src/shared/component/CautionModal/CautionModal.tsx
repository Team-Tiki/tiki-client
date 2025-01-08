import { Flex, Text } from '@tiki/ui';

import { contentStyle } from '@/shared/component/CautionModal/CautionModal.style';
import { Modal } from '@/shared/component/Modal';

interface CautionModalProps {
  infoText?: string;
  content?: string;
  subContent?: string;
  footerType?: 'caution' | 'caution-modify';
}

const CautionModal = ({ infoText, content, subContent = '', footerType }: CautionModalProps) => {
  return (
    <>
      <Modal.Header infoText={infoText} />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '1.6rem' }}>
          <Text tag="body4" css={contentStyle}>
            {content}
          </Text>
          <Text tag="body8" css={contentStyle}>
            {subContent}
          </Text>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType={footerType!} />
    </>
  );
};

export default CautionModal;
