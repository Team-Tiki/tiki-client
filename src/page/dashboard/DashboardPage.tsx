import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import ArchivingPage from '@/page/archiving/index/ArchivingPage';
import Day from '@/page/archiving/index/component/TimeLine/Day/Day';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { contentBoxStyle, fileListStyle, listItemStyle, timelineBtnStyle } from '@/page/dashboard/DashboardPage.style';
import ListItem from '@/page/dashboard/component/ListItem/ListItem';
import { Notes } from '@/page/dashboard/constant/notes';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { PATH } from '@/shared/constant/path';

import { FileData } from '@/mock/data/drive';

const DashboardPage = () => {
  const navigate = useNavigate();

  const teamId = localStorage.getItem('teamId');
  const { ref, currentYear, currentMonth, handlePrevMonth, handleNextMonth, handleToday, endDay } = useDate(teamId!);

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
            <Button variant="outline" onClick={() => handleNav(PATH.ARCHIVING)} css={timelineBtnStyle}>
              전체보기
            </Button>
          }
          css={[{ height: '40rem' }, contentBoxStyle]}>
          <TimeLineHeader
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            currentYear={currentYear}
            currentMonth={currentMonth}
            onToday={handleToday}
          />
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
        css={[{ paddingRight: '1rem', '&>div:last-child': { height: '85%' } }, contentBoxStyle]}>
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
