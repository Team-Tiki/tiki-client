import ActivityTagIcon from '@/common/asset/svg/ic_activity_tag.svg?react';
import BlockIcon from '@/common/asset/svg/ic_block_create.svg?react';
import InviteIcon from '@/common/asset/svg/ic_invite.svg?react';
import MemberTagIcon from '@/common/asset/svg/ic_member_tag.svg?react';
import WarningIcon from '@/common/asset/svg/ic_warning.svg?react';
import SuccessIcon from '@/common/asset/svg/ic_workspace_success.svg?react';

type ModalContentType = 'create-workspace' | 'create-block' | 'deleted' | 'invite' | 'member-tag' | 'activity-tag';

interface ModalHeader {
  icon: React.ReactNode | ((step: number, totalSteps: number) => React.ReactNode);
  title: string;
  infoText: string;
}

interface ModalButton {
  text: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'underline';
  disabled?: boolean;
}

interface ModalContent {
  steps: number;
  headers: ModalHeader[];
  buttons: ModalButton[][];
}

export const isModalContentType = (type: string | null): type is ModalContentType => {
  return type !== null && type in MODAL_CONTENTS;
};

export const MODAL_CONTENTS: Record<ModalContentType, ModalContent> = {
  'create-workspace': {
    steps: 4,
    headers: [
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps ? <SuccessIcon width={40} height={40} /> : <span>{`${step}/${totalSteps}`}</span>,
        title: '워크스페이스 이름 입력',
        infoText: '워크스페이스 이름을 입력해주세요.',
      },
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps ? <SuccessIcon width={40} height={40} /> : <span>{`${step}/${totalSteps}`}</span>,
        title: '카테고리 선택',
        infoText: '카테고리를 선택해주세요.',
      },
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps ? <SuccessIcon width={40} height={40} /> : <span>{`${step}/${totalSteps}`}</span>,
        title: '프로필 이미지 등록',
        infoText: '프로필 이미지를 등록해주세요.',
      },
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps ? <SuccessIcon width={40} height={40} /> : <span>{`${step}/${totalSteps}`}</span>,
        title: '완료',
        infoText: '워크스페이스 생성이 완료되었습니다.',
      },
    ],
    buttons: [
      [
        { text: '건너뛰기', variant: 'outline' },
        { text: '다음으로', variant: 'primary' },
      ],
      [
        { text: '건너뛰기', variant: 'outline' },
        { text: '다음으로', variant: 'primary' },
      ],
      [
        { text: '건너뛰기', variant: 'outline' },
        { text: '다음으로', variant: 'primary' },
      ],
      [{ text: '확인', variant: 'primary' }],
    ],
  },
  'create-block': {
    steps: 2,
    headers: [
      { icon: <BlockIcon width={40} height={40} />, title: '타임블록 생성', infoText: '블록 정보를 입력해주세요.' },
      { icon: <BlockIcon width={40} height={40} />, title: '파일 업로드', infoText: '파일을 업로드해주세요.' },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '다음으로', variant: 'primary' },
      ],
      [
        { text: '취소', variant: 'outline' },
        { text: '완료', variant: 'primary' },
      ],
    ],
  },
  deleted: {
    steps: 1,
    headers: [{ icon: <WarningIcon width={40} height={40} />, title: '삭제 확인', infoText: '정말 삭제하시겠습니까?' }],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '삭제', variant: 'primary' },
      ],
    ],
  },
  invite: {
    steps: 1,
    headers: [
      {
        icon: <InviteIcon width={40} height={40} />,
        title: '팀원 초대',
        infoText: '워크스페이스에 팀원을 초대할 수 있습니다.',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '초대', variant: 'primary' },
      ],
    ],
  },
  'member-tag': {
    steps: 1,
    headers: [
      {
        icon: <MemberTagIcon width={40} height={40} />,
        title: '팀원 태그',
        infoText: '관련된 팀원을 태그할 수 있습니다.',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '완료', variant: 'primary' },
      ],
    ],
  },
  'activity-tag': {
    steps: 1,
    headers: [
      {
        icon: <ActivityTagIcon width={40} height={40} />,
        title: '활동 태그',
        infoText: '타임라인에 저장된 활동을 태그할 수 있습니다.',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '완료', variant: 'primary' },
      ],
    ],
  },
};
