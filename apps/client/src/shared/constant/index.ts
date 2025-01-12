export const STEPS = {
  NAME: 1,
  CATEGORY: 2,
  IMAGE: 3,
  BLOCK: 1,
  UPLOAD: 2,
} as const;

export const STEPS_BY_CATEGORY = {
  NAME: 3,
  CATEGORY: 3,
  IMAGE: 3,
  BLOCK: 2,
  UPLOAD: 2,
} as const;

export const DELETE_TITLE = {
  BLOCK: '블록을 삭제하시겠습니까?',
  DOCS: '문서를 삭제하시겠습니까?',
} as const;

export const DELETE_DETAIL = {
  BLOCK: '삭제된 블록은 복구할 수 없습니다.',
  DOCS: '삭제된 문서는 복구할 수 없습니다.',
} as const;

export const DELETED_TITLE = {
  TRASH: '휴지통을 비우시겠습니까?',
  PERMANENT: '파일을 완전히 삭제하시겠습니까?',
} as const;

export const DELETED_DETAIL = '휴지통에서 지워진 파일은 영구삭제되며 되돌릴 수 없습니다' as const;

export const CAUTION = {
  NOTE: {
    INFO_TEXT: '노트 템플릿 변경',
    CONTENT: '노트 작성 형식을 변경하시겠습니까?',
    DESC: '변경 시 마지막 저장 후 수정된 내용은 저장되지 않습니다',
  },
  DELETE_NOTE: {
    INFO_TEXT: '인수인계 노트 삭제',
    CONTENT: '선택된 노트를 삭제하시겠습니까?',
    DESC: '삭제된 노트는 영구삭제되며 되돌릴 수 없습니다',
  },
  DELETE_FILE: {
    INFO_TEXT: '파일 삭제',
    CONTENT: '선택된 파일을 삭제하시겠습니까?',
    DESC: '삭제된 파일은 휴지통으로 이동되며 30일 후 영구삭제 됩니다',
  },
  DELETE_TIMEBLOCK: {
    INFO_TEXT: '타임블럭 삭제',
    CONTENT: '해당 블럭에 태그된 인수인계 노트가 있습니다',
    DESC: '태그된 인수 인계노트에서도 해당 활동 태그는 삭제됩니다',
  },
  HANDOVER_FILE_EXIST: {
    INFO_TEXT: '파일 삭제',
    CONTENT: '해당 파일에 연동된 인수인계 노트가 있습니다',
    DESC: '연동된 인수 인계노트에서도 해당 파일은 삭제됩니다',
  },
  CHANGE_NOTE_FORM: {
    INFO_TEXT: '노트 템플릿 변경',
    CONTENT: '노트 작성 형식을 변경하시겠습니까?',
    DESC: '변경 시 마지막 저장 후 수정된 내용은 저장되지 않습니다',
  },
  DELETE_FOR_GOOD: {
    INFO_TEXT: '휴지통 비우기',
    CONTENT: '휴지통을 비우시겠습니까?',
    DESC: '휴지통에서 지워진 파일은 영구삭제되며 되돌릴 수 없습니다',
  },
};

export const MEMBER_DATA = [
  {
    name: '이채원',
    email: 'cindy1769@daum.net',
    profileUrl: 'https://github.com/user-attachments/assets/a9c876cd-9d07-49db-94f1-353e5c4a5ee3',
  },
  {
    name: '이채원2',
    email: 'cindy1769@naver.com',
    profileUrl: 'https://github.com/user-attachments/assets/a9c876cd-9d07-49db-94f1-353e5c4a5ee3',
  },
] as const;

export const ACITIVITY_TAG_DATA = [
  {
    id: 1,
    tag: 'MEETING',
    title: 'UX 스터디',
    date: '2024.09.25',
    color: '#D3EFFA',
  },
  {
    id: 2,
    tag: 'STUDY',
    title: 'UX 스터디',
    date: '2024.09.25',
    color: '#F8E1F5',
  },
  {
    id: 3,
    tag: 'NOTICE',
    title: 'UX 스터디',
    date: '2024.09.25',
    color: '#C4F2E5',
  },
] as const;
