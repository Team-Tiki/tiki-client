import CheckBox from '@/common/component/CheckBox/CheckBox';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { containerStyle } from '@/page/handover/component/NoteItem/NoteItem.style';
import { fontStyle } from '@/page/handover/component/NoteListHeader/NoteListHeader.style';

interface NoteListHeaderProps {
  isSelected: boolean;
  canSelect: boolean;
  handleAllClick: () => void;
}

const NoteListHeader = ({ isSelected, canSelect, handleAllClick }: NoteListHeaderProps) => {
  return (
    <header css={[containerStyle, fontStyle]}>
      <Flex styles={{ align: 'center' }}>
        {canSelect && <CheckBox isChecked={isSelected} onChange={handleAllClick} style={{ marginRight: '1.6rem' }} />}
        <Text tag="body8">활동 기간</Text>
      </Flex>
      <Text tag="body8">노트 제목</Text>
      <Text tag="body8">작성자</Text>
      <Text tag="body8">작성여부</Text>
    </header>
  );
};

export default NoteListHeader;
