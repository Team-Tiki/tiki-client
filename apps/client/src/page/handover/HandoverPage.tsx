import { IcSearch } from '@tiki/icon';
import { Button, Divider, Flex, Input, Select } from '@tiki/ui';
import { useMultiSelect, useOutsideClick, useOverlay } from '@tiki/utils';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NoteItem from '@/page/handover/component/NoteItem/NoteItem';
import NoteListHeader from '@/page/handover/component/NoteListHeader/NoteListHeader';
import { FILTER_OPTION, NOTE_DUMMY } from '@/page/handover/constant/noteList';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { PATH } from '@/shared/constant/path';

const HandoverPage = () => {
  const [sortOption, setSortOption] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const navigate = useNavigate();

  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect } = useMultiSelect<
    (typeof NOTE_DUMMY)[0]
  >('id', NOTE_DUMMY);

  const handleSortOption = (id: string) => {
    setSortOption(id);

    close();
  };

  const 노트작성페이지로이동 = () => {
    navigate(PATH.HANDOVER_NOTE);
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
              선택
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
        isSelected={ids.length === NOTE_DUMMY.length}
        canSelect={canSelect}
        handleAllClick={handleAllClick}
      />
      <Divider />
      <ul>
        {(sortOption === FILTER_OPTION[0].value ? NOTE_DUMMY.slice() : NOTE_DUMMY.slice().reverse()).map((data) => (
          <NoteItem
            key={data.id}
            startDate={data.startDate}
            endDate={data.endDate}
            title={data.title}
            writer={data.writer}
            isFinished={data.isFinished}
            canSelect={canSelect}
            isSelected={ids.includes(+data.id)}
            onSelect={() => handleItemClick(+data.id)}
          />
        ))}
      </ul>
    </ContentBox>
  );
};

export default HandoverPage;
