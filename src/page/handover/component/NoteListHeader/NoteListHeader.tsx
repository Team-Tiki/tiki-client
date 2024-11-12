import CheckBox from '@/common/component/CheckBox/CheckBox';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { containerStyle } from '@/page/handover/component/NoteItem/NoteItem.style';
import { fontStyle } from '@/page/handover/component/NoteListHeader/NoteListHeader.style';

interface NoteListHeaderProps {
  activeCheck: boolean;
  isChecked: boolean;
  handleChecked: () => void;
}

const NoteListHeader = ({ activeCheck, isChecked, handleChecked }: NoteListHeaderProps) => {
  return (
    <div css={[containerStyle, fontStyle]}>
      <Flex styles={{ align: 'center' }}>
        {activeCheck && <CheckBox isChecked={isChecked} onChange={handleChecked} style={{ marginRight: '1.6rem' }} />}
        <Text tag="body8">활동 기간</Text>
      </Flex>
      <Text tag="body8">노트 제목</Text>
      <Text tag="body8">작성자</Text>
      <Text tag="body8">작성여부</Text>
    </div>
  );
};

export default NoteListHeader;
