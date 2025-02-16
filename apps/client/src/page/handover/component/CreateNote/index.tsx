import { Button, CommandButton, Flex, TabButton, TabList, TabPanel, TabRoot, useToastAction } from '@tiki/ui';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateCustomNote from '@/page/handover/component/CreateNote/CreateCustomNote';
import CreateNoteDetail from '@/page/handover/component/CreateNote/CreateNoteDetail';
import CreateTemplateNote from '@/page/handover/component/CreateNote/CreateTemplateNote';
import { EMPTY_NOTE_TITLE } from '@/page/handover/constant';
import { noteSectionStyle, tabButtonStyle } from '@/page/handoverNote/index.style';
import { CreateNoteInfoType, CustomNote, TemplateNote } from '@/page/handoverNote/type/note';

import { $api } from '@/shared/api/client';
import { CAUTION } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';

const CreateNotePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [noteDetail, setNoteDetail] = useState<CreateNoteInfoType>({
    title: '',
    author: '',
    complete: false,
    startDate: '',
    endDate: '',
    timeBlockList: [],
  });

  const [templateData, setTemplateData] = useState<TemplateNote>({
    answerHowToFix: '',
    answerHowToPrepare: '',
    answerWhatActivity: '',
    answerWhatIsDisappointedThing: '',
    documentList: [],
  });

  const [customData, setCustomData] = useState<CustomNote>({
    documentList: [],
    contents: '',
  });

  const navigate = useNavigate();
  const teamId = useInitializeTeamId();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const { createToast } = useToastAction();

  const { mutate: templateMutation } = $api.useMutation('post', '/api/v1/notes/template');
  const { mutate: customMutation } = $api.useMutation('post', '/api/v1/notes/free');

  const handleTabClick = (tabId: number) => {
    openModal('caution', {
      infoText: CAUTION.NOTE.INFO_TEXT,
      content: CAUTION.NOTE.CONTENT,
      desc: CAUTION.NOTE.DESC,
      footerType: 'caution-modify',
      onClick: () => {
        setSelectedTab(+tabId)!;
        closeModal();
      },
      onClose: () => {
        setSelectedTab(+!tabId)!;
        closeModal();
      },
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedTab == 0) {
      templateMutation(
        {
          body: {
            title: noteDetail.title.trim() === '' ? EMPTY_NOTE_TITLE : noteDetail.title,
            complete: noteDetail.complete,
            startDate: noteDetail.startDate,
            endDate: noteDetail.endDate,
            answerWhatActivity: templateData.answerWhatActivity,
            answerHowToPrepare: templateData.answerHowToPrepare,
            answerWhatIsDisappointedThing: templateData.answerWhatIsDisappointedThing,
            answerHowToFix: templateData.answerHowToFix,
            timeBlockIds: noteDetail.timeBlockList?.map((item) => item.id!),
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast('템플릿 노트가 저장되었습니다.', 'success');
            navigate(PATH.HANDOVER);
          },
          onError: () => {
            createToast('노트 저장에 실패했습니다', 'error');
          },
        }
      );
    }

    if (selectedTab == 1) {
      customMutation(
        {
          body: {
            title: noteDetail.title.trim() === '' ? EMPTY_NOTE_TITLE : noteDetail.title,
            complete: noteDetail.complete,
            startDate: noteDetail.startDate,
            endDate: noteDetail.endDate,
            contents: customData.contents,
            timeBlockIds: noteDetail.timeBlockList?.map((item) => item.id!),
            documentIds: templateData.documentList?.map((item) => item.id!),
            teamId,
          },
        },
        {
          onSuccess: () => {
            createToast('자유 노트가 저장되었습니다.', 'success');
            navigate(PATH.HANDOVER);
          },
          onError: () => {
            createToast('노트 저장에 실패했습니다', 'error');
          },
        }
      );
    }
  };

  return (
    <form css={noteSectionStyle} onSubmit={handleSubmit}>
      <CreateNoteDetail detail={noteDetail} setDetail={setNoteDetail} />
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
