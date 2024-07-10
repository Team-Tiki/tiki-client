import {
  blockNameTextStyle,
  containerStyle,
  fileNameStyle,
} from '@/page/archiving/component/DocumentBar/DocumentItem/DocumentItem.style';

import { ReactNode } from 'react';

import Download from '@/common/asset/svg/download.svg?react';
import TrashBox from '@/common/asset/svg/trash_box.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

interface DocumentItemProps {
  children: ReactNode;
  wholeDocument: boolean;
  blockName?: string;
}

const DocumentItem = ({ children, wholeDocument, blockName }: DocumentItemProps) => {
  return (
    <article css={containerStyle}>
      {wholeDocument && (
        <div>
          <Text tag="body8" css={blockNameTextStyle('blue_100')}>
            {blockName}
          </Text>
        </div>
      )}
      <Flex>
        <Text tag="body6" css={fileNameStyle}>
          {children?.toString()}
        </Text>
        <Download style={{ width: '2rem', height: '2rem' }} />
        <TrashBox style={{ width: '2rem', height: '2rem' }} />
      </Flex>
    </article>
  );
};

export default DocumentItem;
