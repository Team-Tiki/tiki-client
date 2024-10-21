import IcOption from '@/common/asset/svg/ic_three_dots.svg?react';
import CheckBox from '@/common/component/CheckBox/CheckBox';
import Flex from '@/common/component/Flex/Flex';

import { containerStyle, rightSideRowStyle } from '@/page/drive/component/FileListItem/FileListItem.style';

import { File } from '@/shared/type/file';
import { getFileVolume } from '@/shared/util/file';

type FileListItemProps = File & {
  isSelected?: boolean;
  onFileSelect?: () => void;
};

const FileListItem = ({
  title,
  volume,
  createdAt,
  type,
  isSelected = false,
  onFileSelect = () => {},
}: FileListItemProps) => {
  return (
    <div css={containerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        <CheckBox isChecked={isSelected} onChange={onFileSelect} />
        <p>{title}</p>
      </Flex>

      <div css={rightSideRowStyle}>
        <p>{getFileVolume(volume)}</p>
        <p>{type}</p>
        <time dateTime={createdAt}>{createdAt}</time>
        <IcOption width={20} height={20} />
      </div>
    </div>
  );
};

export default FileListItem;
