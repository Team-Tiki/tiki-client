import { useState } from 'react';

import { Add, Arrow, LogoSymbol } from '@/common/asset/svg';

import { arrowStyle, containerStyle, leftSidebarListStyle } from './LeftSidebar.style';
import LeftSidebarItem from './LeftSidebarItem/LeftSidebarItem';

const LeftSidebar = () => {
  const [isExpansion, setIsExpansion] = useState(true);

  return (
    <aside css={containerStyle(isExpansion)}>
      <Arrow
        css={arrowStyle}
        onClick={() => {
          setIsExpansion((prevState) => !prevState);
        }}
      />
      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem
            isClick={true}
            isExpansion={isExpansion}
            logo={<LogoSymbol style={{ height: '4rem', width: '4rem' }} />}
          />
          <LeftSidebarItem
            isClick={false}
            isExpansion={isExpansion}
            logo={<Add style={{ height: '1.6rem', width: '1.6rem' }} />}>
            Showcase
          </LeftSidebarItem>
          <LeftSidebarItem
            isClick={false}
            isExpansion={isExpansion}
            logo={<Add style={{ height: '1.6rem', width: '1.6rem' }} />}>
            Team 1
          </LeftSidebarItem>
          <LeftSidebarItem
            isClick={false}
            isExpansion={isExpansion}
            logo={<Add style={{ height: '1.6rem', width: '1.6rem' }} />}>
            워크스페이스 생성
          </LeftSidebarItem>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
