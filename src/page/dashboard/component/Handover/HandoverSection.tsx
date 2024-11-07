import Flex from '@/common/component/Flex/Flex';

import { listItemStyle } from '@/page/dashboard/component/Handover/HandoverSection.style';
import ListItem from '@/page/dashboard/component/Handover/ListItem/ListItem';
import { Notes } from '@/page/dashboard/constant/notes';

const HandoverSection = () => {
  return (
    <Flex css={listItemStyle}>
      {Notes.map((note) => {
        return (
          <ListItem key={note.noteId} title={note.title} content={note.content} date={note.date} tags={note.tags} />
        );
      })}
    </Flex>
  );
};

export default HandoverSection;
