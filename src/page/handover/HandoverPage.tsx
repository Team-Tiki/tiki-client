import { useState } from 'react';

import IcSearch from '@/common/asset/svg/ic_search.svg?react';
import Button from '@/common/component/Button/Button';
import CheckBox from '@/common/component/CheckBox/CheckBox';
import Divider from '@/common/component/Divider/Divider';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import Text from '@/common/component/Text/Text';
import { useOutsideClick, useOverlay } from '@/common/hook';

import { finishedStyle, periodStyle, titleStyle, writerStyle } from '@/page/handover/HandoverPage.style';
import NoteItem from '@/page/handover/NoteItem/NoteItem';
import { NOTE_DUMMY } from '@/page/handover/constant/noteList';

import ContentBox from '@/shared/component/ContentBox/ContentBox';

const FILTER_OPTION = [{ value: '최근 작성된 순' }, { value: '과거 작성된 순' }];

const HandoverPage = () => {
  const [activeCheck, setActiveCheck] = useState(false);
  const [isChecked, setIsChcked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const [selected, setSelected] = useState('');

  const handleSelect = (id: string) => {
    setSelected(id);

    close();
  };

  const handleChecked = () => {
    setIsChcked((prevState) => !prevState);
  };

  const handleCheckClick = () => {
    setActiveCheck((prevState) => !prevState);
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
          <Button>새 노트 작성</Button>
        </Flex>
      }
      contentOption={
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center', gap: '1rem' }}>
          <Flex styles={{ gap: '0.8rem' }}>
            <Button variant="tertiary" onClick={handleCheckClick}>
              선택
            </Button>
          </Flex>

          <Flex styles={{ align: 'center' }}>
            <Select
              aria-label={`선택된 아이템: ${selected}`}
              css={{ width: '10.5rem' }}
              placeholder="최근 작성된 순"
              variant="option"
              options={FILTER_OPTION}
              ref={ref}
              isOpen={isOpen}
              onTrigger={toggle}
              onSelect={handleSelect}
            />
          </Flex>
        </Flex>
      }>
      <Flex styles={{ align: 'center', justify: 'left', height: '1.8rem', marginBottom: '1.4rem' }}>
        {activeCheck && <CheckBox isChecked={isChecked} onChange={handleChecked} style={{ marginRight: '1.6rem' }} />}
        <Text tag="body8" css={periodStyle(activeCheck)}>
          활동 기간
        </Text>
        <Text tag="body8" css={titleStyle}>
          노트 제목
        </Text>
        <Text tag="body8" css={writerStyle}>
          작성자
        </Text>
        <Text tag="body8" css={finishedStyle}>
          작성여부
        </Text>
      </Flex>
      <Divider />
      <ul>
        {(selected === FILTER_OPTION[0].value ? NOTE_DUMMY.slice() : NOTE_DUMMY.slice().reverse()).map((data) => (
          <NoteItem
            key={data.id}
            startDate={data.startDate}
            endDate={data.endDate}
            title={data.title}
            writer={data.writer}
            isFinished={data.isFinished}
            activeSelect={activeCheck}
            isTotalChecked={isChecked}
          />
        ))}
      </ul>
    </ContentBox>
  );
};

export default HandoverPage;
