import { useState } from 'react';

import Add from '@/common/asset/svg/add.svg?react';
import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import LogoSymbol from '@/common/asset/svg/logo_symbol.svg?react';

import { arrowStyle, containerStyle, leftSidebarListStyle } from './LeftSidebar.style';
import LeftSidebarItem from './LeftSidebarItem/LeftSidebarItem';

const LeftSidebar = () => {
  const [isExpansion, setIsExpansion] = useState(true);

  return (
    <aside css={containerStyle(isExpansion)}>
      {isExpansion ? (
        <LeftArrow
          css={arrowStyle}
          onClick={() => {
            setIsExpansion((prevState) => !prevState);
          }}
        />
      ) : (
        <RightArrow
          css={arrowStyle}
          onClick={() => {
            setIsExpansion((prevState) => !prevState);
          }}
        />
      )}

      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem
            isClicked={false}
            isExpansion={isExpansion}
            logo={<LogoSymbol style={{ height: '4rem', width: '4rem' }} />}
          />
          <LeftSidebarItem
            isClicked={true}
            isExpansion={isExpansion}
            logo={<Add style={{ height: '1.6rem', width: '1.6rem' }} />}>
            Showcase
          </LeftSidebarItem>
          <LeftSidebarItem
            isClicked={false}
            isExpansion={isExpansion}
            logo={<Add style={{ height: '1.6rem', width: '1.6rem' }} />}>
            Team 1
          </LeftSidebarItem>
          <LeftSidebarItem
            isClicked={false}
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
