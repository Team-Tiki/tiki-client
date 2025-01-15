import { Flex, Spinner } from '@tiki/ui';

import { listItemStyle } from '@/page/dashboard/component/Handover/HandoverSection.style';
import ListItem from '@/page/dashboard/component/Handover/ListItem/ListItem';
import ItemAdder from '@/page/dashboard/component/ItemAdder/ItemAdder';
import { useNoteData } from '@/page/handover/hook/api/queries';

import { PATH } from '@/shared/constant/path';
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
      {!data?.data?.noteGetResponseList[0] && <ItemAdder path={PATH.HANDOVER} />}
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
