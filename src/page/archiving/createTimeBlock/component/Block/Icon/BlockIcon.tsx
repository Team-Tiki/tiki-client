import {
  boxStyle,
  iconStyle,
  selectedIconStyle,
} from '@/page/archiving/createTimeBlock/component/Block/Icon/BlockIcon.style';
import { BLOCK_ICON } from '@/page/archiving/createTimeBlock/constant/icon';

interface BlockIconProps {
  selectedBlockIcon: number;
  onBlockIconSelect: (index: number) => void;
}

const BlockIcon = ({ selectedBlockIcon, onBlockIconSelect }: BlockIconProps) => {
  const handleIconClick = (index: number) => {
    onBlockIconSelect(selectedBlockIcon === index ? -1 : index); // Set to -1 if the same icon is clicked
  };

  return (
    <div css={boxStyle}>
      {BLOCK_ICON.map((icon, index) => (
        <div
          key={index}
          css={[iconStyle, selectedBlockIcon === index && selectedIconStyle]}
          onClick={() => handleIconClick(index)}>
          <img src={icon.img} alt={icon.title} />
        </div>
      ))}
    </div>
  );
};

export default BlockIcon;
