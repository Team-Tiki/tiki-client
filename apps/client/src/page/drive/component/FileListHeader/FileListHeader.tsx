import { Text } from '@tiki/ui';

import { headerStyle, rightSideRowStyle } from '@/page/drive/component/FileListHeader/FileListHeader.style';

const FileListHeader = () => {
  return (
    <header css={headerStyle}>
      <div css={{ marginLeft: '3.4rem' }}>
        <Text tag="body6">이름</Text>
      </div>

      <div css={rightSideRowStyle}>
        <Text tag="body6">크기</Text>
        <Text tag="body6">종류</Text>
        <Text tag="body6">추가된 날짜</Text>
      </div>
    </header>
  );
};

export default FileListHeader;
