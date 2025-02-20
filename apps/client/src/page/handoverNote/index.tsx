import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { EMPTY_NOTE_TITLE } from '@/page/handover/constant';
import Custom from '@/page/handoverNote/component/Custom';
import NoteInfo from '@/page/handoverNote/component/NoteInfo';
import Template from '@/page/handoverNote/component/Template';
import { AUTO_SAVE_TIME } from '@/page/handoverNote/constants';
import { useNoteDetailData } from '@/page/handoverNote/hooks/queries';
import { CreateNoteInfoType, CustomNoteData, TemplateNoteData } from '@/page/handoverNote/type/note';
import { formatDateToString } from '@/page/signUp/info/util/date';

import { $api } from '@/shared/api/client';
import { CAUTION } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useInterval } from '@/shared/hook/common/useInterval';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { hasKeyInObject } from '@/shared/util/typeGuard';

import { noteSectionStyle, tabButtonStyle } from './index.style';

const NotePage = () => {
  const [noteDetail, setNoteDetail] = useState<CreateNoteInfoType | TemplateNoteData | CustomNoteData | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const { noteId } = useParams();
  const navigate = useNavigate();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const { createToast } = useToastAction();
  const teamId = useInitializeTeamId();

  const today = formatDateToString(new Date()) as string;

  const { data: noteData } = useNoteDetailData();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (noteData?.data) {
      setNoteDetail({ ...noteData.data });
      if (hasKeyInObject(noteData.data, 'contents')) {
        setSelectedTab(1);
      }
    }
  }, [noteData.data]);

  const { mutate: templateMutation } = $api.useMutation('patch', '/api/v1/notes/template/{noteId}');
  const { mutate: customMutation } = $api.useMutation('patch', '/api/v1/notes/free/{noteId}');

  const handleTabClick = (tabId: number) => {
    openModal('caution', {
      infoText: CAUTION.NOTE.INFO_TEXT,
      content: CAUTION.NOTE.CONTENT,
      desc: CAUTION.NOTE.DESC,
      footerType: 'caution-modify',
      onClick: () => {
        setSelectedTab(tabId);

        setNoteDetail(() => {
          if (tabId === 0) {
            return {
              noteId: +noteId!,
              noteType: 'TEMPLATE',
              title: '',
              author: noteDetail?.author,
              startDate: '',
              endDate: '',
              complete: false,
              answerWhatActivity: '',
              answerHowToPrepare: '',
              answerWhatIsDisappointedThing: '',
              answerHowToFix: '',
              timeBlockList: [],
              documentList: [],
            } as TemplateNoteData;
          } else {
            return {
              noteId: +noteId!,
              noteType: 'FREE',
              title: '',
              author: noteDetail?.author,
              startDate: '',
              endDate: '',
              complete: false,
              contents: '',
              documentList: [],
              timeBlockList: [],
            } as CustomNoteData;
          }
        });

        closeModal();
      },
    });
  };

  const handleSubmit = () => {
    if (!noteDetail) return;

    if (selectedTab === 0) {
      const templateData = noteDetail as TemplateNoteData;
      templateMutation(
        {
          params: { path: { noteId: +noteId! } },
          body: {
            ...templateData,
            title: templateData.title === '' ? EMPTY_NOTE_TITLE : templateData.title,
            startDate: templateData.startDate === '' ? today : templateData.startDate,
            endDate: templateData.endDate === '' ? today : templateData.endDate,
            timeBlockIds: templateData.timeBlockList.map((block) => block.id),
            documentIds: templateData.documentList.map((document) => document.id),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast('노트 내용이 저장되었습니다', 'success');

            queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/{teamId}/{noteId}'] });
            queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/{teamId}'] });
          },
          onError: () => createToast('노트를 저장하던 도중 에러가 발생했습니다.', 'error'),
        }
      );
    } else {
      const customData = noteDetail as CustomNoteData;
      customMutation(
        {
          params: { path: { noteId: +noteId! } },
          body: {
            ...customData,
            title: customData.title === '' ? EMPTY_NOTE_TITLE : customData.title,
            startDate: customData.startDate === '' ? formatDateToString(new Date())! : customData.startDate,
            endDate: customData.endDate === '' ? formatDateToString(new Date())! : customData.endDate,
            contents: customData.contents,
            documentIds: customData.documentList.map((document) => document.id) || [],
            timeBlockIds: noteDetail.timeBlockList.map((block) => block.id) || [],
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast('노트 내용이 저장되었습니다', 'success');

            queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/{teamId}/{noteId}'] });
            queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/{teamId}'] });
          },
          onError: () => createToast('노트를 저장하던 도중 에러가 발생했습니다.', 'error'),
        }
      );
    }
  };

  const handleSubmitBtnClick = () => {
    try {
      handleSubmit();

      createToast('노트 내용이 저장되었습니다', 'success');
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/{teamId}/{noteId}'] });
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/{teamId}'] });

      navigate(PATH.HANDOVER);
    } catch (error) {
      createToast('노트를 저장하던 도중 에러가 발생했습니다.', 'error');
    }
  };

  // 30초마다 자동 저장
  useInterval(handleSubmit, AUTO_SAVE_TIME);

  return (
    <section css={noteSectionStyle}>
      {noteDetail && (
        <NoteInfo
          info={noteDetail as CreateNoteInfoType}
          setInfo={setNoteDetail as React.Dispatch<React.SetStateAction<CreateNoteInfoType>>}
        />
      )}

      <TabRoot css={{ flexGrow: '1' }}>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton css={tabButtonStyle}>템플릿 작성</TabButton>
          <TabButton css={tabButtonStyle}>자유 작성</TabButton>
        </TabList>
        <Flex style={{ gap: '0.8rem', justifyContent: 'end', margin: '3rem 0 1.6rem 0' }}>
          <Button variant="tertiary" size="small" onClick={() => navigate(PATH.HANDOVER)}>
            작성 취소
          </Button>
          <CommandButton commandKey="S" isCommand={true} size="small" onClick={handleSubmitBtnClick}>
            저장
          </CommandButton>
        </Flex>

        {noteDetail &&
          (hasKeyInObject(noteDetail, 'answerWhatActivity') ? (
            <TabPanel selectedTab={selectedTab}>
              <Template
                data={noteDetail as TemplateNoteData}
                setData={setNoteDetail as React.Dispatch<React.SetStateAction<TemplateNoteData>>}
              />
              <Custom />
            </TabPanel>
          ) : hasKeyInObject(noteDetail, 'contents') ? (
            <TabPanel selectedTab={selectedTab}>
              <Template />
              <Custom
                data={noteDetail as CustomNoteData}
                setData={setNoteDetail as React.Dispatch<React.SetStateAction<CustomNoteData>>}
              />
            </TabPanel>
          ) : (
            <></>
          ))}
      </TabRoot>
    </section>
  );
};

export default NotePage;
