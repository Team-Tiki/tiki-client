import { HTMLAttributes } from 'react';

import tikiLogo from '@/common/asset/svg/ic_tiki_logo.svg';
import Flex from '@/common/component/Flex/Flex';
import ToolTip from '@/common/component/ToolTip/ToolTip';

import { indicatorStyle, itemStyle } from '@/shared/component/SideNavBar/Item/Item.style';
import PageIndicatorStick from '@/shared/component/SideNavBar/LeftSidebarItem/PageIndicatorStick/PageIndicatorStick';

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  hoverMessage?: string;
  logoUrl?: string;
  isClicked: boolean;
  onClick: () => void;
}

const Item = ({ logoUrl = tikiLogo, isClicked, onClick, hoverMessage = '', ...props }: ItemProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <Flex tag="li" styles={{ align: 'center', justify: 'center', padding: '2rem' }} {...props}>
      <PageIndicatorStick isClicked={isClicked} css={indicatorStyle} />
      <ToolTip message={hoverMessage} position="right" gap={0.8}>
        <div role="button" tabIndex={-1} css={itemStyle(isClicked)} onClick={onClick} onKeyDown={handleEnterKeyDown}>
          <img src={logoUrl} alt="버튼 아이콘" />
        </div>
      </ToolTip>
    </Flex>
  );
};

export default Item;
