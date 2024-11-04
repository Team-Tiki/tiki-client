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
