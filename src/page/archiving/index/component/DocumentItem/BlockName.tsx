import { blockNameTextStyle } from '@/page/archiving/index/component/DocumentItem/DocumentItem.style';

import Text from '@/common/component/Text/Text';

interface BlockNameProps {
  blockName: string;
  color: string;
}

const BlockName = ({ blockName, color }: BlockNameProps) => {
  return (
    <div>
      <Text tag="body8" css={blockNameTextStyle(color)}>
        {blockName}
      </Text>
    </div>
  );
};

export default BlockName;
