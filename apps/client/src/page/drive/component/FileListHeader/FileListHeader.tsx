import { CheckBox, Flex, Text } from '@tiki/ui';

import { headerStyle, rightSideRowStyle } from '@/page/drive/component/FileListHeader/FileListHeader.style';

interface FileListHeaderProps {
  onSelectAll: () => void;
}

const FileListHeader = ({ onSelectAll }: FileListHeaderProps) => {
  return (
    <header css={headerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        <CheckBox isChecked={false} onChange={onSelectAll} />
        <Text tag="body6">이름</Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6">크기</Text>
        <Text tag="body6">종류</Text>
        <Text tag="body6">추가된 날짜</Text>
      </div>
    </header>
  );
};

export default FileListHeader;
