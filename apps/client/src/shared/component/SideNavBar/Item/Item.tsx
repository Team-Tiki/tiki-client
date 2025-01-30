import { IcAdd, IcGlobal } from '@tiki/icon';
import { Flex, Text, ToolTip } from '@tiki/ui';
import { motion } from 'framer-motion';

import { HTMLAttributes } from 'react';

import {
  firstSpellStyle,
  indicatorStyle,
  itemStyle,
  pageIndicatorStyle,
  profileImgStyle,
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
        <img src={variant.logoUrl} alt="팀 프로필 이미지" css={profileImgStyle} />
      ) : (
        <Text tag="body6" css={firstSpellStyle}>
          {variant.hoverMessage[0]}
        </Text>
      );
    }
  }
};

const Item = ({ variant, isClicked, onLogoClick, ...props }: ItemProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onLogoClick();
    }
  };

  return (
    <Flex tag="li" styles={{ align: 'center', justify: 'center', padding: '2rem' }} {...props}>
      {isClicked && <motion.div layoutId="snb_indicator" css={[pageIndicatorStyle, indicatorStyle]} />}
      <ToolTip message={variant.hoverMessage} position="right" gap={0.8}>
        <div
          role="button"
          tabIndex={0}
          css={itemStyle(isClicked, variant.type === 'add')}
          onClick={onLogoClick}
          onKeyDown={handleEnterKeyDown}>
          {getItemsInfo(variant)}
        </div>
      </ToolTip>
    </Flex>
  );
};

export default Item;
