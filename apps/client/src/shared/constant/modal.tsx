import { IcActivityTag, IcBlockCreate, IcError, IcFileUpload, IcInvite, IcWorkspaceSuccess } from '@tiki/icon';

type ModalContentType =
  | 'create-workspace'
  | 'create-block'
  | 'invite'
  | 'activity-tag'
  | 'new-file'
  | 'file'
  | 'timeblock-file'
  | 'caution'
  | 'image';

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
          step === totalSteps + 1 ? (
            <IcWorkspaceSuccess width={40} height={40} />
          ) : (
            <span>{`${step}/${totalSteps}`}</span>
          ),
        title: '새로운 워크스페이스 생성하기',
        infoText: '워크스페이스의 이름을 입력해주세요',
      },
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps + 1 ? (
            <IcWorkspaceSuccess width={40} height={40} />
          ) : (
            <span>{`${step}/${totalSteps}`}</span>
          ),
        title: '새로운 워크스페이스 생성하기',
        infoText: '팀 카테고리를 선택해주세요',
      },
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps + 1 ? (
            <IcWorkspaceSuccess width={40} height={40} />
          ) : (
            <span>{`${step}/${totalSteps}`}</span>
          ),
        title: '동아리 프로필 이미지 등록',
        infoText: '우리 동아리 프로필에 표시할 이미지를 등록해주세요',
      },
      {
        icon: (step: number, totalSteps: number) =>
          step === totalSteps + 1 ? (
            <IcWorkspaceSuccess width={40} height={40} />
          ) : (
            <span>{`${step}/${totalSteps}`}</span>
          ),
        title: '워크스페이스 생성완료',
        infoText: '이제 워크스페이스를 사용할 수 있습니다.',
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
    steps: 4,
    headers: [
      {
        icon: <IcBlockCreate width={40} height={40} />,
        title: '타임 블록 생성',
        infoText: '블록 카테고리를 선택하세요',
      },
      {
        icon: <IcBlockCreate width={40} height={40} />,
        title: '타임 블록 생성',
        infoText: '타임라인에 생성할 블록 정보를 입력해주세요',
      },
      {
        icon: <IcBlockCreate width={40} height={40} />,
        title: '타임 블록 생성',
        infoText: '타임라인에 추가할 파일을 선택해주세요',
      },
      {
        icon: <IcBlockCreate width={40} height={40} />,
        title: '타임 블록 생성',
        infoText: '추가한 파일을 확인해주세요',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '다음으로', variant: 'primary' },
      ],
      [
        { text: '취소', variant: 'outline' },
        { text: '업로드', variant: 'primary' },
      ],
    ],
  },
  invite: {
    steps: 1,
    headers: [
      {
        icon: <IcInvite width={20} height={20} />,
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
  'activity-tag': {
    steps: 1,
    headers: [
      {
        icon: <IcActivityTag width={20} height={20} css={{ margin: '1rem' }} />,
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
  'new-file': {
    steps: 1,
    headers: [
      {
        icon: <IcFileUpload width={20} height={20} css={{ margin: '1rem' }} />,
        title: '파일 업로드',
        infoText: '업로드할 파일을 선택하세요',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '업로드', variant: 'primary' },
      ],
    ],
  },
  file: {
    steps: 1,
    headers: [
      {
        icon: <IcFileUpload width={20} height={20} css={{ margin: '1rem' }} />,
        title: '파일 연동',
        infoText: '연동할 파일을 선택하세요',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '연동', variant: 'primary' },
      ],
    ],
  },
  caution: {
    steps: 1,
    headers: [
      {
        icon: <IcError width={40} height={40} css={{ margin: '1rem', flexShrink: '0' }} />,
        title: '주의!',
        infoText: '',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '완료', variant: 'primary' },
      ],
    ],
  },
  'timeblock-file': {
    steps: 2,
    headers: [
      {
        icon: <IcFileUpload width={20} height={20} css={{ margin: '1rem' }} />,
        title: '파일 업로드',
        infoText: '타임블록에 추가할 파일을 선택해주세요',
      },
      {
        icon: <IcBlockCreate width={40} height={40} />,
        title: '타임 블록 생성',
        infoText: '추가한 파일을 확인해주세요',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '완료', variant: 'primary' },
      ],
    ],
  },
  image: {
    steps: 3,
    headers: [
      {
        icon: <IcFileUpload width={20} height={20} css={{ margin: '1rem' }} />,
        title: '대표 이미지 업로드',
        infoText: '업로드할 파일을 선택하세요',
      },
      {
        icon: <IcFileUpload width={20} height={20} css={{ margin: '1rem' }} />,
        title: '대표 이미지 업로드',
        infoText: '파일을 업로드 중입니다',
      },
      {
        icon: <IcFileUpload width={20} height={20} css={{ margin: '1rem' }} />,
        title: '대표 이미지 업로드',
        infoText: '',
      },
    ],
    buttons: [
      [
        { text: '취소', variant: 'outline' },
        { text: '업로드', variant: 'primary' },
      ],
      [
        { text: '취소', variant: 'outline' },
        { text: '업로드', variant: 'primary' },
      ],
      [
        { text: '취소', variant: 'outline' },
        { text: '업로드', variant: 'primary' },
      ],
    ],
  },
};
