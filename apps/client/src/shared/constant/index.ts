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
  EMPTY_DELETED: {
    INFO_TEXT: '휴지통 비우기',
    CONTENT: '휴지통을 비우시겠습니까?',
    DESC: '휴지통에서 지워진 파일은 영구삭제되며 되돌릴 수 없습니다',
  },
  DELETE_FOR_GOOD: {
    INFO_TEXT: '영구 삭제',
    CONTENT: '선택된 항목을 완전히 삭제하시겠습니까?',
    DESC: '휴지통에서 지워진 파일은 영구삭제되며 되돌릴 수 없습니다',
  },
};

export const FILE = {
  NOT_FOUND: '일치하는 항목이 존재하지 않습니다.',
  NO_CONNECTED_FILE: '연동된 파일이 없습니다.',
};

export const TAG = {
  NOT_FOUND: '일치하는 항목이 존재하지 않습니다.',
  NO_CONNECTED_TAG: '태그된 활동이 없습니다.',
};

export const IMAGE_MODAL = {
  TITLE: '대표 이미지 업로드',
  SELECT: {
    INFO_TEXT: '업로드할 파일을 선택하세요',
  },
  LOADING: {
    INFO_TEXT: '파일을 업로드 중입니다',
  },
};
