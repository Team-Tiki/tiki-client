import { HTMLAttributes } from 'react';

import Flex from '@/common/component/Flex/Flex';

import { itemStyle } from '@/shared/component/SideNavBar/Item/Item.style';
import PageIndicatorStick from '@/shared/component/SideNavBar/LeftSidebarItem/PageIndicatorStick/PageIndicatorStick';

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  hoverMessage?: string;
  logoUrl: string;
  isClicked: boolean;
  onClick: () => void;
}

const Item = ({ logoUrl, isClicked, onClick, hoverMessage = '', ...props }: ItemProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <Flex tag="li" styles={{ align: 'center' }} {...props}>
      <PageIndicatorStick isClicked={isClicked} />
      <div role="button" tabIndex={0} css={itemStyle(isClicked)} onClick={onClick} onKeyDown={handleEnterKeyDown}>
        <img src={logoUrl} alt="버튼 아이콘" />
      </div>
    </Flex>
  );
};

export default Item;
