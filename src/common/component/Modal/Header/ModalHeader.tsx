import { useModalContentType } from '@/shared/store/modal';
import { getHeaderContent } from '@/shared/util/modalHeader';

import Flex from '../../Flex/Flex';
import Text from '../../Text/Text';
import { infoTextStyle } from './ModalHeader.style';

interface ModalHeaderProps {
  step?: number;
  totalSteps?: number;
}

const ModalHeader = ({ step, totalSteps = 4 }: ModalHeaderProps) => {
  const contentType = useModalContentType();
  const { icon, title, infoText } = getHeaderContent(contentType!, step, totalSteps);

  return (
    <Flex styles={{ direction: 'row', justify: 'center', align: 'center', gap: '1.2rem' }}>
      {icon && <span>{icon}</span>}
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
