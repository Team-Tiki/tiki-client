import { Flex, Text } from '@tiki/ui';

import { iconTextStyle, infoTextStyle } from '@/shared/component/Modal/Header/ModalHeader.style';
import { MODAL_CONTENTS, isModalContentType } from '@/shared/constant/modal';
import { useModalContentType } from '@/shared/store/modal';

interface ModalHeaderProps {
  step?: number;
  totalSteps?: number;
  title?: string;
  infoText?: string;
}

const ModalHeader = ({ step = 1, totalSteps = 4, title, infoText }: ModalHeaderProps) => {
  const contentType = useModalContentType();

  if (!isModalContentType(contentType)) return null;

  const modalContent = MODAL_CONTENTS[contentType];
  const { icon, title: defaultTitle, infoText: defaultInfoText } = modalContent.headers[step - 1];

  const displayIcon = typeof icon === 'function' ? icon(step, totalSteps) : icon;

  return (
    <Flex tag={'header'} styles={{ direction: 'row', justify: 'flex-start', align: 'center', gap: '1.2rem' }}>
      {displayIcon && (
        <Text tag="body6" css={iconTextStyle}>
          {displayIcon}
        </Text>
      )}
      <Flex styles={{ direction: 'column', justify: 'flex-start', gap: '0.6rem' }}>
        <Text tag="body6" css={{ fontWeight: 500 }}>
          {defaultTitle}
        </Text>
        {(infoText || defaultInfoText) && (
          <Text tag="body8" css={infoTextStyle}>
            {infoText || defaultInfoText}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default ModalHeader;
