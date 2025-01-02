import { Text } from '@tiki/ui';

import {
  headerStyle,
  rightSideRowStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Browse/File/BrowseFileHeader.style';

const BrowseFileHeader = () => {
  return (
    <header css={headerStyle}>
      <Text tag="body6">이름</Text>
      <div css={rightSideRowStyle}>
        <Text tag="body6">종류</Text>
        <Text tag="body6">추가된 날짜</Text>
      </div>
    </header>
  );
};

export default BrowseFileHeader;
