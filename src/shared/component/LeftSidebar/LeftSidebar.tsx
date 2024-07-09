import { useState } from 'react';

import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';

import { testData } from '../constant/testData';
import { arrowStyle, containerStyle, leftSidebarListStyle } from './LeftSidebar.style';
import LeftSidebarItem from './LeftSidebarItem/LeftSidebarItem';

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

      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem isClicked={false} isExpansion={isExpansion} url={'src/common/asset/svg/logo_symbol.svg'} />
          {testData.map((data) => {
            return (
              <LeftSidebarItem isClicked={false} isExpansion={isExpansion} url={data.iconImageUrl}>
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
