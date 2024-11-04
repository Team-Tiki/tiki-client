import Flex from '@/common/component/Flex/Flex';
import { iconTextStyle, infoTextStyle } from '@/common/component/Modal/Header/ModalHeader.style';
import Text from '@/common/component/Text/Text';

import { useModalContentType } from '@/shared/store/modal';
import { getHeaderContent } from '@/shared/util/modalHeader';

interface ModalHeaderProps {
  step?: number;
  totalSteps?: number;
}

const ModalHeader = ({ step, totalSteps = 4 }: ModalHeaderProps) => {
  const contentType = useModalContentType();
  const { icon, title, infoText } = getHeaderContent(contentType!, step, totalSteps);

  return (
    <Flex styles={{ direction: 'row', justify: 'flex-start', align: 'center', gap: '1.2rem' }}>
      {icon && (
        <Text tag="body6" css={iconTextStyle}>
          {icon}
        </Text>
      )}
      <Flex styles={{ direction: 'column', justify: 'flex-start', gap: '0.6rem' }}>
        <Text tag="body6" css={{ fontWeight: 500 }}>
          {title}
        </Text>
        {infoText && (
          <Text tag="body8" css={infoTextStyle}>
            {infoText}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default ModalHeader;
