import { useState } from 'react';

import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import LogoSymbol from '@/common/asset/svg/logo_symbol.svg?react';

import {
  LogoSymbolStyle,
  arrowStyle,
  containerStyle,
  leftSidebarListStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';
import { TEST_DATA } from '@/shared/component/constant/index';

const LeftSidebar = () => {
  const [isExpansion, setIsExpansion] = useState(true);

  const handleArrowClick = () => {
    setIsExpansion((prevState) => !prevState);
  };

  return (
    <aside css={containerStyle(isExpansion)}>
      {isExpansion ? (
        <LeftArrow css={arrowStyle} onClick={handleArrowClick} />
      ) : (
        <RightArrow css={arrowStyle} onClick={handleArrowClick} />
      )}
      <LogoSymbol css={LogoSymbolStyle} />
      <nav>
        <ul css={leftSidebarListStyle}>
          {TEST_DATA.map((data) => {
            return (
              <LeftSidebarItem isClicked={true} isExpansion={isExpansion} url={data.iconImageUrl}>
                {data.name}
              </LeftSidebarItem>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
