import { boxStyle, iconStyle, selectedIconStyle } from '@/page/archiving/component/Modal/Block/Icon/BlockIcon.style';
import { BLOCK_ICON } from '@/page/archiving/constant/icon';

interface BlockIconProps {
  selectedBlockIcon: number | null;
  onBlockIconSelect: (index: number | null) => void;
}

const BlockIcon = ({ selectedBlockIcon, onBlockIconSelect }: BlockIconProps) => {
  const handleIconClick = (index: number) => {
    onBlockIconSelect(selectedBlockIcon === index ? null : index);
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
