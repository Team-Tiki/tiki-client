import CheckBox from '@/common/component/CheckBox/CheckBox';
import Flex from '@/common/component/Flex/Flex';

import { headerStyle, rightSideRowStyle } from '@/page/drive/component/FileListHeader/FileListHeader.style';

interface FileListHeaderProps {
  onSelectAll: () => void;
}

const FileListHeader = ({ onSelectAll }: FileListHeaderProps) => {
  return (
    <header css={headerStyle}>
      <Flex styles={{ grow: '1', align: 'center', gap: '1.6rem' }}>
        <CheckBox isChecked={false} onChange={onSelectAll} />
        <p>이름</p>
      </Flex>

      <div css={rightSideRowStyle}>
        <p>크기</p>
        <p>종류</p>
        <p>추가된 날짜</p>
      </div>
    </header>
  );
};

export default FileListHeader;
