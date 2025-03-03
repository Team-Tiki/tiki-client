import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import Custom from '@/page/handoverNote/component/Custom';
import NoteInfo from '@/page/handoverNote/component/NoteInfo';
import Template from '@/page/handoverNote/component/Template';
import { AUTO_SAVE_TIME } from '@/page/handoverNote/constants';
import { customConfig, infoConfig, templateConfig } from '@/page/handoverNote/constants/noteConfig';
import { useNoteDetailData } from '@/page/handoverNote/hook/api/queries';
import { CreateNoteInfoType, CustomNoteData, TemplateNoteData } from '@/page/handoverNote/type/note';

import { $api } from '@/shared/api/client';
import { CAUTION } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { NOTE } from '@/shared/constant/toast';
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

  const { data: noteData } = useNoteDetailData();
  const queryClient = useQueryClient();

  const { mutate: templateMutation } = $api.useMutation('patch', '/api/v1/notes/template/{noteId}');
  const { mutate: customMutation } = $api.useMutation('patch', '/api/v1/notes/free/{noteId}');

  useEffect(() => {
    if (noteData?.data) {
      setNoteDetail({ ...noteData.data });
      if (hasKeyInObject(noteData.data, 'contents')) {
        setSelectedTab(1);
      }
    }
  }, [noteData.data]);

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
              ...infoConfig,
              ...templateConfig,
              noteId: Number(noteId),
              author: noteData?.data?.author || '',
            };
          } else {
            return {
              noteId: Number(noteId),
              ...infoConfig,
              ...customConfig,
              author: noteData?.data?.author || '',
            };
          }
        });

        closeModal();
      },
    });
  };

  const handleSubmit = async () => {
    if (!noteDetail) return;

    if (selectedTab === 0) {
      const templateData = noteDetail as TemplateNoteData;
      const infoRequest = Object.assign(infoConfig, {
        ...(noteDetail as CreateNoteInfoType),
      });
      const templateRequest = Object.assign(templateConfig, {
        ...templateData,
        documentIds: templateData.documentList.map((document) => document.id),
      });

      templateMutation(
        {
          params: { path: { noteId: Number(noteId) } },
          body: {
            ...infoRequest,
            ...templateRequest,
            teamId,
            timeBlockIds: noteDetail.timeBlockList.map((tag) => tag.id) || [],
          },
        },

        {
          onSuccess: () => {
            createToast(NOTE.SUCCESS.SAVE, 'success');

            return Promise.all([
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}/${noteId}'] }),
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}'] }),
            ]);
          },
          onError: () => createToast(NOTE.ERROR.SAVE, 'error'),
        }
      );
    } else {
      const customData = noteDetail as CustomNoteData;
      const infoRequest = Object.assign(infoConfig, {
        ...(noteDetail as CreateNoteInfoType),
      });

      const customRequest = Object.assign(customConfig, {
        ...customData,
        documentIds: customData.documentList.map((document) => document.id),
      });

      customMutation(
        {
          params: { path: { noteId: Number(noteId) } },
          body: {
            ...infoRequest,
            ...customRequest,
            teamId,
            timeBlockIds: noteDetail.timeBlockList.map((tag) => tag.id) || [],
          },
        },
        {
          onSuccess: () => {
            createToast(NOTE.SUCCESS.SAVE, 'success');

            return Promise.all([
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}/${noteId}'] }),
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}'] }),
            ]);
          },
          onError: () => createToast(NOTE.ERROR.SAVE, 'error'),
        }
      );
    }
  };

  const handleSubmitBtnClick = async () => {
    try {
      await handleSubmit();

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}/${noteId}'] }),
        queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}'] }),
      ]);

      navigate(PATH.HANDOVER);
    } catch (error) {
      createToast(NOTE.ERROR.SAVE, 'error');
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
