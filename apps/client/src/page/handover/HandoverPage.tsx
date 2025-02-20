import { IcSearch } from '@tiki/icon';
import { Button, Divider, Flex, Input, Select, Spinner } from '@tiki/ui';
import { useDebounce, useMultiSelect } from '@tiki/utils';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import NoteItem from '@/page/handover/component/NoteItem/NoteItem';
import NoteListHeader from '@/page/handover/component/NoteListHeader/NoteListHeader';
import { FILTER_OPTION, FILTER_ORDER } from '@/page/handover/constant';
import { useNoteData } from '@/page/handover/hook/api/queries';
import { FILTER_TYPE, NoteListType, NoteType } from '@/page/handover/type';

import { $api } from '@/shared/api/client';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import { CAUTION } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useIntersect } from '@/shared/hook/common/useIntersect';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';

const HandoverPage = () => {
  const [sortOption, setSortOption] = useState<FILTER_TYPE>('DESC');
  const [searchValue, setSearchValue] = useState('');
  const [noteList, setNoteList] = useState<NoteListType>([]);
  const [lastUpdatedAt, setLastUpdatedAt] = useState('');

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data: noteData, isFetching } = useNoteData(lastUpdatedAt, sortOption);

  const filterKeyword = useDebounce(searchValue, 400);
  const teamId = useInitializeTeamId();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect } = useMultiSelect<NoteType>(
    'noteId',
    noteList ?? []
  );

  // 스크롤 감지하는 로직
  const targetRef = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (isFetching) return;

    setLastUpdatedAt(noteList.length > 0 ? noteList[noteList?.length - 1].lastUpdatedAt : '');
  });

  const { mutate: noteListMutate } = $api.useMutation('delete', '/api/v1/notes/{teamId}', {
    onSuccess: () => {
      setNoteList([]);
      setLastUpdatedAt('');
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/notes/{teamId}'],
      });
    },
  });

  useEffect(() => {
    if (noteData?.data?.noteGetResponseList) {
      if (lastUpdatedAt) {
        setNoteList((prev) => [
          ...prev,
          ...noteData.data!.noteGetResponseList.filter((note) => {
            const duplicatedNote = prev.some((prevNote) => prevNote.noteId === note.noteId);

            return !duplicatedNote;
          }),
        ]);
        return;
      }
      setNoteList(noteData.data!.noteGetResponseList);
    }
  }, [noteData, lastUpdatedAt]);

  const handleNoteDelete = (e: React.MouseEvent, noteIds: number[]) => {
    e.stopPropagation();

    openModal('caution', {
      infoText: CAUTION.DELETE_NOTE.INFO_TEXT,
      content: CAUTION.DELETE_NOTE.CONTENT,
      desc: CAUTION.DELETE_NOTE.DESC,
      footerType: 'caution',
      onClick: () => {
        if (!noteIds) {
          return;
        }
        noteListMutate({
          params: {
            path: { teamId },
            query: {
              noteIds: noteIds,
            },
          },
        });

        if (canSelect) {
          handleToggleSelect();
        }

        closeModal();
      },
      onClose: () => {
        closeModal();
      },
    });
  };

  const handleSortOption = (id: string) => {
    setSortOption(FILTER_ORDER[id as keyof typeof FILTER_ORDER] as FILTER_TYPE);
    setLastUpdatedAt('');

    close();
  };

  const 노트작성페이지로이동 = () => {
    navigate(PATH.CREATE_HANDOVER_NOTE);
  };

  return (
    <ContentBox
      variant="handover"
      title="인수인계 노트"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            css={{ width: '33.6rem' }}
            LeftIcon={<IcSearch width={16} height={16} />}
            placeholder="노트 제목을 검색해보세요"
          />
          <Button onClick={노트작성페이지로이동}>새 노트 작성</Button>
        </Flex>
      }
      contentOption={
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center', gap: '1rem' }}>
          <Flex styles={{ gap: '0.8rem' }}>
            <Button variant="tertiary" onClick={canSelect ? handleAllClick : handleToggleSelect}>
              {canSelect ? '전체선택' : '선택'}
            </Button>
            {canSelect && (
              <>
                <Button variant="tertiary" onClick={(e) => handleNoteDelete(e, ids)}>
                  삭제
                </Button>
                <Button variant="tertiary" onClick={handleToggleSelect}>
                  취소
                </Button>
              </>
            )}
          </Flex>

          <Flex styles={{ align: 'center' }}>
            <Select
              aria-label={`선택된 아이템: ${sortOption}`}
              css={{ width: '10.5rem' }}
              placeholder="최근 작성된 순"
              variant="option"
              options={FILTER_OPTION}
              onSelect={handleSortOption}
            />
          </Flex>
        </Flex>
      }>
      {!!noteList.length && (
        <section>
          <NoteListHeader canSelect={canSelect} />
          <Divider />
          <ul>
            {noteList
              ?.filter((data) => data.title.includes(filterKeyword.trim()))
              .map((data) => (
                <NoteItem
                  key={data.noteId}
                  canSelect={canSelect}
                  isSelected={ids.includes(+data.noteId)}
                  onSelect={() => handleItemClick(+data.noteId)}
                  onNoteDelete={(e) => handleNoteDelete(e, [data.noteId])}
                  onClick={() => navigate(`/handover/${+data.noteId}`)}
                  {...data}
                />
              ))}
            {isFetching && (
              <Flex styles={{ justify: 'center', marginTop: '1rem' }}>
                <Spinner size={20} />
              </Flex>
            )}
            <div style={{ height: '1px' }} ref={targetRef} />
          </ul>
        </section>
      )}

      <EmptySection domain="handover" isVisible={noteList.length === 0} />
    </ContentBox>
  );
};

export default HandoverPage;
