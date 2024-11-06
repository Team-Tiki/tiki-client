import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import DateProvider from '@/page/archiving/index/DateProvider';
import Day from '@/page/archiving/index/component/TimeLine/Day/Day';
import { dayBodyStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';
import {
  contentBoxStyle,
  fileListStyle,
  handoverBoxStyle,
  listItemStyle,
  timelineContentStyle,
} from '@/page/dashboard/DashboardPage.style';
import ListItem from '@/page/dashboard/component/ListItem/ListItem';
import { Notes } from '@/page/dashboard/constant/notes';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { PATH } from '@/shared/constant/path';

import { FileData } from '@/mock/data/drive';

const DashboardPage = () => {
  const navigate = useNavigate();

  const teamId = localStorage.getItem('teamId');
  const { currentYear, currentMonth, endDay } = useDate(teamId!);

  const { data } = useGetTimeBlockQuery(+teamId!, 'executive', currentYear, currentMonth);

  const timeBlocks: Block[] = data.timeBlocks;
  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <Flex styles={{ gap: '2.4rem' }}>
      <Flex styles={{ direction: 'column', gap: '2.4rem', width: '65%' }}>
        <ContentBox
          variant={'file'}
          title={'파일'}
          headerOption={
            <Button variant="outline" onClick={() => handleNav(PATH.DRIVE)}>
              전체보기
            </Button>
          }
          css={[{ height: '21.6rem' }, contentBoxStyle]}>
          <Flex css={fileListStyle}>
            {FileData.map((file) => {
              return (
                <FileGrid
                  key={file.fileId}
                  variant="secondary"
                  title={file.title}
                  type={file.type}
                  volume={file.volume}
                />
              );
            })}
          </Flex>
        </ContentBox>
        <ContentBox
          variant={'timeline'}
          title={'타임라인'}
          headerOption={
            <Button variant="outline" onClick={() => handleNav(PATH.ARCHIVING)}>
              전체보기
            </Button>
          }
          css={[{ height: '40rem' }, contentBoxStyle]}>
          <DateProvider teamId={teamId!}>
            <TimeLineHeader />
            <Day />
            <div css={[dayBodyStyle(endDay.getDate()), timelineContentStyle]}>
              {timeBlocks.map((block) => {
                const { startDate, endDate } = block;
                const { startDate: blockStartDate, endDate: blockEndDate } = createTimeBlock({
                  startDate: new Date(startDate),
                  endDate: new Date(endDate),
                  currentYear,
                  currentMonth,
                });

                return (
                  <TimeBlock
                    key={block.timeBlockId}
                    startDate={blockStartDate}
                    endDate={blockEndDate}
                    color={block.color}
                    floor={blockFloors[block.timeBlockId] || 1}
                    blockType={block.blockType}
                    onBlockClick={() => {
                      navigate(PATH.ARCHIVING, { state: { selectedBlock: block } });
                    }}>
                    {block.name}
                  </TimeBlock>
                );
              })}
            </div>
          </DateProvider>
        </ContentBox>
      </Flex>

      <ContentBox
        variant={'handover'}
        title={'인수인계 노트'}
        headerOption={
          <Button variant="outline" onClick={() => handleNav(PATH.HANDOVER)}>
            전체보기
          </Button>
        }
        css={[handoverBoxStyle, contentBoxStyle]}>
        <Flex css={listItemStyle}>
          {Notes.map((note) => {
            return (
              <ListItem key={note.noteId} title={note.title} content={note.content} date={note.date} tags={note.tags} />
            );
          })}
        </Flex>
      </ContentBox>
    </Flex>
  );
};

export default DashboardPage;
