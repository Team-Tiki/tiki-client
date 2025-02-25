import { IcCheck } from '@tiki/icon';
import { Flex } from '@tiki/ui';

import {
  containerStyle,
  expandButtonStyle,
  iconStyle,
  termTextStyle,
} from '@/page/signUp/index/component/TermItem/TermItem.style';

interface TermItemProps {
  term: string;
  onSelect?: () => void;
  isRequired?: boolean;
  isSelected?: boolean;
}

const TermItem = ({ term, onSelect, isSelected = false, isRequired = false }: TermItemProps) => {
  const title = `${isRequired ? '[필수]' : '[선택]'} ${term}`;

  const redirectUrl =
    term === '이용 약관'
      ? 'https://chrome-colony-e33.notion.site/TIKI-66fad8d357bd476883e341c812a7b12f?pvs=4'
      : 'https://chrome-colony-e33.notion.site/TIKI-16fdb1892dd580429858e986da3f5736?pvs=4';

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

      <a href={redirectUrl} target="blank" onClick={(e) => e.stopPropagation()} css={expandButtonStyle}>
        더보기
      </a>
    </div>
  );
};

export default TermItem;
