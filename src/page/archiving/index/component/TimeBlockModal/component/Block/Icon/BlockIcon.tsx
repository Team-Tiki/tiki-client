/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  boxStyle,
  iconStyle,
  selectedIconStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Block/Icon/BlockIcon.style';
import { BLOCK_ICON } from '@/page/archiving/index/component/TimeBlockModal/constant/iconBlock';

interface BlockIconProps {
  selectedBlockIcon: number;
  onBlockIconSelect: (index: number) => void;
}

const BlockIcon = ({ selectedBlockIcon, onBlockIconSelect }: BlockIconProps) => {
  const handleIconClick = (index: number) => {
    onBlockIconSelect(selectedBlockIcon === index ? -1 : index);
  };

  return (
    <div css={boxStyle}>
      {BLOCK_ICON.map((icon, index) => (
        <div
          key={index}
          css={[iconStyle, selectedBlockIcon === index && selectedIconStyle]}
          onClick={() => handleIconClick(index)}>
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default BlockIcon;
