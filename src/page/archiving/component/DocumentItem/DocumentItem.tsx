import {
  blockNameTextStyle,
  containerStyle,
  fileNameStyle,
} from '@/page/archiving/component/DocumentItem/DocumentItem.style';

import { ReactNode } from 'react';

import Download from '@/common/asset/svg/download.svg?react';
import TrashBox from '@/common/asset/svg/trash_box.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

interface DocumentItemProps {
  children: ReactNode;
  selectedId: string;
  blockName?: string;
  fileUrl?: string;
}

const DocumentItem = ({ children, selectedId, blockName }: DocumentItemProps) => {
  // 문서 클릭시 띄워주는 함수
  // const onClickDocumentItem = () => {
  //   window.open(
  //     'https://docs.google.com/spreadsheets/d/1vFy_-hBj7IUPulzk2hlTelVRkCimJw39/edit?usp=share_link&ouid=115368206250146821866&rtpof=true&sd=true'
  //   );
  // };
  return (
    <li css={containerStyle(selectedId)}>
      {selectedId === 'total' && (
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
        <Download width={20} height={20} />
        <TrashBox width={20} height={20} />
      </Flex>
    </li>
  );
};

export default DocumentItem;
