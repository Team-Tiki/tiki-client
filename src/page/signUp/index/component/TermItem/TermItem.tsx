import { useState } from 'react';

import IcCheck from '@/common/asset/svg/ic_check.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { scrollStyle } from '@/common/style/scroll';
import { theme } from '@/common/style/theme/theme';

import {
  containerStyle,
  contentStyle,
  expandButtonStyle,
  iconStyle,
  termTextStyle,
} from '@/page/signUp/index/component/TermItem/TermItem.style';

interface TermItemProps {
  term: string;
  content: string;
  description: string;
  onSelect?: () => void;
  isRequired?: boolean;
  isSelected?: boolean;
}

const TermItem = ({ term, content, onSelect, description, isSelected = false, isRequired = false }: TermItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const title = `${isRequired ? '[필수]' : '[선택]'} ${term}`;

  return (
    <div
      role="button"
      tabIndex={0}
      css={containerStyle(isSelected)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect?.()}
      onClick={onSelect}>
      <Flex styles={{ align: 'center', gap: '0.6rem' }}>
        <IcCheck width={16} height={16} css={iconStyle(isSelected)} />
        <p css={termTextStyle}>{title}</p>
      </Flex>

      <Button onClick={() => setIsExpanded(true)} css={expandButtonStyle} variant="tertiary" size="xSmall">
        더보기
      </Button>

      <Modal isOpen={isExpanded} onClose={() => setIsExpanded(false)}>
        <Flex styles={{ direction: 'column', gap: '2rem', width: '37.6rem' }}>
          <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
            <Text tag="body6">{title}</Text>
            <Text css={{ color: theme.colors.gray_800 }} tag="body8">
              {description}
            </Text>
          </Flex>

          <div css={contentStyle}>
            <Text tag="body8" css={[{ whiteSpace: 'pre-line' }, scrollStyle]}>
              {content}
            </Text>
          </div>
          <Button onClick={() => setIsExpanded(false)} variant="outline" size="large" css={{ width: '100%' }}>
            닫기
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};

export default TermItem;
