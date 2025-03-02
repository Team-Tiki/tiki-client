import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot, useToastAction } from '@tiki/ui';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import CreateCustomNote from '@/page/handover/component/CreateNote/CreateCustomNote';
import CreateNoteDetail from '@/page/handover/component/CreateNote/CreateNoteDetail';
import CreateTemplateNote from '@/page/handover/component/CreateNote/CreateTemplateNote';
import { customConfig, infoConfig, templateConfig } from '@/page/handoverNote/constants/noteConfig';
import { noteSectionStyle, tabButtonStyle } from '@/page/handoverNote/index.style';
import { CreateNoteInfoType, CustomNote, TemplateNote } from '@/page/handoverNote/type/note';

import { $api } from '@/shared/api/client';
import { CAUTION } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { NOTE } from '@/shared/constant/toast';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';

const CreateNotePage = () => {
  const navigate = useNavigate();
  const teamId = useInitializeTeamId();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const { createToast } = useToastAction();

  const { mutate: templateMutation } = $api.useMutation('post', '/api/v1/notes/template');
  const { mutate: customMutation } = $api.useMutation('post', '/api/v1/notes/free');

  const queryClient = useQueryClient();

  const [selectedTab, setSelectedTab] = useState(0);
  const [templateData, setTemplateData] = useState<TemplateNote>({ ...templateConfig });
  const [customData, setCustomData] = useState<CustomNote>({ ...customConfig });
  const [noteInfo, setNoteInfo] = useState<CreateNoteInfoType>({
    ...infoConfig,
    startDate: '',
    endDate: '',
  });

  const handleTabClick = (tabId: number) => {
    openModal('caution', {
      infoText: CAUTION.NOTE.INFO_TEXT,
      content: CAUTION.NOTE.CONTENT,
      desc: CAUTION.NOTE.DESC,
      footerType: 'caution-modify',
      onClick: () => {
        setSelectedTab(tabId)!;
        closeModal();
      },
      onClose: () => {
        setSelectedTab(tabId)!;
        closeModal();
      },
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedTab == 0) {
      const infoRequest = Object.assign(infoConfig, {
        ...noteInfo,
      });

      templateMutation(
        {
          body: {
            ...infoRequest,
            timeBlockIds: infoRequest.timeBlockList,
            answerWhatActivity: templateData.answerWhatActivity,
            answerHowToPrepare: templateData.answerHowToPrepare,
            answerWhatIsDisappointedThing: templateData.answerWhatIsDisappointedThing,
            answerHowToFix: templateData.answerHowToFix,
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast(NOTE.SUCCESS.SAVE, 'success');

            return Promise.all([
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}/${noteId}'] }),
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}'] }),

              navigate(PATH.HANDOVER),
            ]);
          },
          onError: () => {
            createToast(NOTE.ERROR.SAVE, 'error');
          },
        }
      );
    }

    if (selectedTab == 1) {
      const infoRequest = Object.assign(infoConfig, {
        ...noteInfo,
      });

      customMutation(
        {
          body: {
            ...infoRequest,
            timeBlockIds: infoRequest.timeBlockList,
            contents: customData.contents,
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast(NOTE.SUCCESS.SAVE, 'success');

            return Promise.all([
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}/${noteId}'] }),
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/notes/${teamId}'] }),

              navigate(PATH.HANDOVER),
            ]);
          },
          onError: () => {
            createToast(NOTE.ERROR.SAVE, 'error');
          },
        }
      );
    }
  };

  return (
    <form css={noteSectionStyle} onSubmit={handleSubmit}>
      <CreateNoteDetail info={noteInfo} setInfo={setNoteInfo} />
      <TabRoot css={{ flexGrow: '1' }}>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton css={tabButtonStyle}>템플릿 작성</TabButton>
          <TabButton css={tabButtonStyle}>자유 작성</TabButton>
        </TabList>
        <Flex style={{ gap: '0.8rem', justifyContent: 'end', margin: '3rem 0 1.6rem 0' }}>
          <Button variant="tertiary" size="small" onClick={() => navigate(PATH.HANDOVER)}>
            작성 취소
          </Button>
          <CommandButton commandKey="S" isCommand={true} size="small" type="submit">
            저장
          </CommandButton>
        </Flex>
        <TabPanel selectedTab={selectedTab}>
          <CreateTemplateNote data={templateData} setData={setTemplateData} />
          <CreateCustomNote data={customData} setData={setCustomData} />
        </TabPanel>
      </TabRoot>
    </form>
  );
};

export default CreateNotePage;
