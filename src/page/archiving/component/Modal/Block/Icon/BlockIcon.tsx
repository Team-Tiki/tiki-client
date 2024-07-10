import { iconStyle, selectedIconStyle } from '@/page/archiving/component/Modal/Block/Icon/BlockIcon.style';
import { BLOCK_ICON } from '@/page/archiving/constant/icon';

import Flex from '@/common/component/Flex/Flex';

interface BlockIconProps {
  selectedIcon: number | null;
  setSelectedIcon: (index: ((prevIndex: number | null) => number | null) | number | null) => void;
}

const BlockIcon = ({ selectedIcon, setSelectedIcon }: BlockIconProps) => {
  const handleIconClick = (index: number) => {
    setSelectedIcon((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Flex tag={'div'} styles={{ direction: 'row', align: 'center', justify: 'center', gap: '1.2rem' }}>
      {BLOCK_ICON.map((icon, index) => (
        <div
          key={index}
          css={[iconStyle, selectedIcon === index && selectedIconStyle]}
          onClick={() => handleIconClick(index)}>
          <img src={icon.img} alt={icon.title} />
        </div>
      ))}
    </Flex>
  );
};

export default BlockIcon;
