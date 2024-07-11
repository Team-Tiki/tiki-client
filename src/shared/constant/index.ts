export const STEPS = {
  NAME: 1,
  CATEGORY: 2,
  IMAGE: 3,
} as const;

export const DELETE_TITLE = {
  BLOCK: '블록을 삭제하시겠습니까?',
  DOCS: '문서를 삭제하시겠습니까?',
} as const;

export const DELETE_DETAIL = {
  BLOCK: '삭제된 블록은 복구할 수 없습니다.',
  DOCS: '삭제된 문서는 복구할 수 없습니다.',
} as const;
