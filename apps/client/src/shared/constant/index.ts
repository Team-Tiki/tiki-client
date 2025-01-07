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

export const DELETE_WORKSPACE = {
  TITLE: '정말 워크스페이스를 삭제하시겠습니까?',
  CONTENT: '워크스페이스가 즉시 삭제됩니다.',
};

export const DELETE_EXECUTIVE = {
  TITLE: '임원진을 워크스페이스를 삭제하시겠습니까?',
  CONTENT: '임원진을 워크스페이스에서 내보냅니다.',
};

export const DELETED_DETAIL = '휴지통에서 지워진 파일은 영구삭제되며 되돌릴 수 없습니다' as const;

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
