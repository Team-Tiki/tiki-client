import { Flex, ToolTip } from '@tiki/ui';
import { motion } from 'framer-motion';

import { HTMLAttributes, useState } from 'react';

import {
  firstSpellStyle,
  indicatorStyle,
  itemStyle,
  pageIndicatorStyle,
} from '@/shared/component/SideNavBar/Item/Item.style';

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  hoverMessage: string;
  logoUrl: string | null;
  isClicked: boolean;
  onLogoClick: () => void;
}

const Item = ({ logoUrl = '', isClicked, onLogoClick, hoverMessage, ...props }: ItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onLogoClick();
    }
  };

  return (
    <Flex tag="li" styles={{ align: 'center', justify: 'center', padding: '2rem' }} {...props}>
      {isClicked && (
        <motion.div layoutId="snb_indicator" css={[pageIndicatorStyle(isClicked, isHover), indicatorStyle]} />
      )}
      <ToolTip message={hoverMessage} position="right" gap={0.8}>
        <div
          role="button"
          tabIndex={0}
          css={itemStyle(isClicked)}
          onClick={onLogoClick}
          onKeyDown={handleEnterKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {logoUrl ? <img src={logoUrl} alt="버튼 아이콘" /> : <span css={firstSpellStyle}>{hoverMessage[0]}</span>}
        </div>
      </ToolTip>
    </Flex>
  );
};

export default Item;
