import { Flex, Spinner } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { listItemStyle } from '@/page/dashboard/component/Handover/HandoverSection.style';
import ListItem from '@/page/dashboard/component/Handover/ListItem/ListItem';
import ItemAdder from '@/page/dashboard/component/ItemAdder/ItemAdder';
import { useNoteData } from '@/page/handover/hook/api/queries';

import { PATH } from '@/shared/constant/path';

const SORT_ORDER = 'DESC';

const HandoverSection = () => {
  const navigate = useNavigate();

  const { data, isPending } = useNoteData('', SORT_ORDER);

  return (
    <Flex styles={{ direction: 'column', gap: '0.8rem', align: 'center' }} css={listItemStyle}>
      {!data?.data?.noteGetResponseList[0] && <ItemAdder path={PATH.HANDOVER} />}

      {isPending ? (
        <Spinner size={30} />
      ) : (
        data?.data?.noteGetResponseList.map((note) => {
          return (
            <ListItem
              key={note.noteId}
              noteId={note.noteId}
              title={note.title}
              date={note.startDate}
              onClick={() => {
                navigate(`${PATH.HANDOVER}/${note.noteId}`);
              }}
            />
          );
        })
      )}
    </Flex>
  );
};

export default HandoverSection;
