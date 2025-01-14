import { IcSearch } from '@tiki/icon';
import { Button, Divider, Flex, Input, Select } from '@tiki/ui';
import { useDebounce, useMultiSelect, useOutsideClick, useOverlay } from '@tiki/utils';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NoteItem from '@/page/handover/component/NoteItem/NoteItem';
import NoteListHeader from '@/page/handover/component/NoteListHeader/NoteListHeader';
import { FILTER_OPTION, FILTER_ORDER } from '@/page/handover/constant';
import { useNoteData } from '@/page/handover/hook/api/queries';
import { FILTER_TYPE, Note } from '@/page/handover/type';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { PATH } from '@/shared/constant/path';

const HandoverPage = () => {
  const [sortOption, setSortOption] = useState<FILTER_TYPE>('ASC');
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const createdAt = useRef<string>(new Date().toISOString().slice(0, -1)).current;

  const filterKeyword = useDebounce(searchValue, 400);

  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const { data } = useNoteData(createdAt, sortOption);

  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect } = useMultiSelect<Note>(
    'noteId',
    data?.data?.noteGetResponseList ?? []
  );

  const handleSortOption = (id: string) => {
    setSortOption(FILTER_ORDER[id as keyof typeof FILTER_ORDER] as FILTER_TYPE);

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
            <Button variant="tertiary" onClick={handleToggleSelect}>
              {canSelect ? '삭제' : '선택'}
            </Button>
          </Flex>

          <Flex styles={{ align: 'center' }}>
            <Select
              aria-label={`선택된 아이템: ${sortOption}`}
              css={{ width: '10.5rem' }}
              placeholder="최근 작성된 순"
              variant="option"
              options={FILTER_OPTION}
              ref={ref}
              isOpen={isOpen}
              onTrigger={toggle}
              onSelect={handleSortOption}
            />
          </Flex>
        </Flex>
      }>
      <NoteListHeader
        isSelected={ids.length === data?.data?.noteGetResponseList.length}
        canSelect={canSelect}
        handleAllClick={handleAllClick}
      />
      <Divider />
      <ul>
        {data?.data?.noteGetResponseList
          .filter((data) => data.title.includes(filterKeyword.trim()))
          .map((data) => (
            <NoteItem
              key={data.noteId}
              startDate={data.startDate}
              endDate={data.endDate}
              title={data.title}
              author={data.author}
              complete={data.complete}
              canSelect={canSelect}
              isSelected={ids.includes(+data.noteId)}
              onSelect={() => handleItemClick(+data.noteId)}
              onClick={() => navigate(`/handover/${+data.noteId}`)}
            />
          ))}
      </ul>
    </ContentBox>
  );
};

export default HandoverPage;
