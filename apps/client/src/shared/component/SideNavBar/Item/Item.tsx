import { IcAdd, IcGlobal } from '@tiki/icon';
import { Flex, ToolTip } from '@tiki/ui';
import { motion } from 'framer-motion';

import { HTMLAttributes, useState } from 'react';

import {
  firstSpellStyle,
  indicatorStyle,
  itemStyle,
  pageIndicatorHoverStyle,
  pageIndicatorStyle,
} from '@/shared/component/SideNavBar/Item/Item.style';

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  variant:
    | {
        type: 'add';
        hoverMessage: string;
      }
    | {
        type: 'dashboard';
        hoverMessage: string;
      }
    | {
        type: 'team';
        logoUrl: string | null;
        hoverMessage: string;
      };
  isClicked: boolean;
  onLogoClick: () => void;
}

const getItemsInfo = (variant: Required<ItemProps['variant']>) => {
  switch (variant?.type) {
    case 'add': {
      return <IcAdd width={16} height={16} />;
    }
    case 'dashboard': {
      return <IcGlobal width={20} height={20} />;
    }
    case 'team': {
      return variant.logoUrl ? (
        <img src={variant.logoUrl} alt="팀 프로필 이미지" />
      ) : (
        <span css={firstSpellStyle}>{variant.hoverMessage[0]}</span>
      );
    }
  }
};

const Item = ({ variant, isClicked, onLogoClick, ...props }: ItemProps) => {
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
      {isClicked && <motion.div layoutId="snb_indicator" css={[pageIndicatorStyle, indicatorStyle]} />}
      <motion.div layoutId="snb_indicator" css={[pageIndicatorHoverStyle, indicatorStyle]} />
      <ToolTip message={variant.hoverMessage} position="right" gap={0.8}>
        <div
          role="button"
          tabIndex={0}
          css={itemStyle(isClicked)}
          onClick={onLogoClick}
          onKeyDown={handleEnterKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {getItemsInfo(variant)}
        </div>
      </ToolTip>
    </Flex>
  );
};

export default Item;
