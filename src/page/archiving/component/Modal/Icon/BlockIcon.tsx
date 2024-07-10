import { iconStyle, iconWrapperStyle, selectedIconStyle } from '@/page/archiving/component/Modal/Icon/BlockIcon.style';
import { BLOCK_ICON } from '@/page/archiving/constant/icon';

import { useState } from 'react';

import Flex from '@/common/component/Flex/Flex';

interface BlockIconProps {}

const BlockIcon = ({}: BlockIconProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleIconClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Flex tag={'div'} styles={{ direction: 'row', align: 'center', justify: 'center', gap: '1.2rem' }}>
      {BLOCK_ICON.map((icon, index) => (
        <div
          key={index}
          css={[iconStyle, selectedIndex === index && selectedIconStyle]}
          onClick={() => handleIconClick(index)}>
          <img src={icon.img} alt={icon.title} />
        </div>
      ))}
    </Flex>
  );
};

export default BlockIcon;
