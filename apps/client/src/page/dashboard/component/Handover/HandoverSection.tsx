import { Flex, Spinner } from '@tiki/ui';

import { listItemStyle } from '@/page/dashboard/component/Handover/HandoverSection.style';
import ListItem from '@/page/dashboard/component/Handover/ListItem/ListItem';
import { useNoteData } from '@/page/handover/hook/api/queries';

import { useCurrentDate } from '@/shared/hook/common/useCurrentDate';

const HandoverSection = () => {
  const createdAt = useCurrentDate();
  const { data, isFetching } = useNoteData(createdAt);

  return (
    <Flex css={listItemStyle}>
      {isFetching ? (
        <Spinner size={30} />
      ) : (
        data?.data?.noteGetResponseList.map((note) => {
          return <ListItem key={note.noteId} noteId={note.noteId} title={note.title} date={note.startDate} />;
        })
      )}
    </Flex>
  );
};

export default HandoverSection;
