import { Flex } from '@tiki/ui';

import { listItemStyle } from '@/page/dashboard/component/Handover/HandoverSection.style';
import ListItem from '@/page/dashboard/component/Handover/ListItem/ListItem';
import { useNoteData } from '@/page/handover/hook/api/queries';

const HandoverSection = () => {
  const { data } = useNoteData(`${new Date().toISOString()}`);

  return (
    <Flex css={listItemStyle}>
      {data?.data?.noteGetResponseList.map((note) => {
        return (
          <ListItem
            key={note.noteId}
            title={note.title}
            content={'노트 상세조회 api 연결 필요'}
            date={note.startDate}
          />
        );
      })}
    </Flex>
  );
};

export default HandoverSection;
