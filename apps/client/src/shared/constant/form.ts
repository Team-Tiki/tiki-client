export const PLACEHOLDER = {
  NAME: '주민등록상 실명 입력',
  BIRTHDAY: 'YYYY-MM-DD',
  SCHOOL: '소속 학교 선택',
  VERIFY: '학교 웹메일 입력',
  AUTH_CODE: '인증코드 6자리 입력',
  PASSWORD: '비밀번호 (문자/숫자/기호를 포함한 8자 이상)',
  PASSWORD_CONFIRM: '비밀번호 확인',
  SCHOOL_EMAIL: '학교 웹메일 입력',
  CUSTOM: '다음 운영진이 참고할 인수인계 노트를 자유롭게 작성해 보세요 (ex. 동아리의 회칙 및 대관정보 등)',
} as const;

export const EMAIL_REMAIN_TIME = 180 as const;

export const SUPPORTING_TEXT = {
  NAME: '이름을 입력해주세요',
  BIRTH: '생년월일을 입력해주세요',

  EMAIL: '이메일을 입력해주세요',
  EMAIL_INVALID: '올바른 이메일을 입력해주세요.',
  EMAIL_SUCCESS: '메일함에서 인증번호를 확인해주세요.',
  EMAIL_EXPIRED: '인증 번호가 만료되었습니다.',
  EMAIL_NOAUTH: '이메일을 인증해주세요.',
  EMAIL_AUTH: '회원가입시 인증한 학교 웹메일을 입력해주세요',

  UNIV: '대학교를 선택해주세요.',

  PASSWORD: '비밀번호를 입력해주세요',
  PASSWORD_NOTICE: '문자/숫자/기호를 포함한 8자 이상의 비밀번호를 입력해주세요.',
  PASSWORD_INVALID: '문자/숫자/기호를 포함한 8자 이상의 비밀번호를 입력해주세요.',
  PASSWORD_VALID: '사용가능한 비밀번호입니다.',
  PASSWORD_CHECKER: '비밀번호 확인을 위해 새로운 비밀번호를 재입력해주세요.',
  PASSWORD_NO_EQUAL: '비밀번호가 일치하지 않습니다.',
  PASSWORD_EQUAL: '비밀번호가 일치합니다.',

  AUTHCODE: '코드를 입력해주세요.\n메일이 도착하지 않았다면 스팸 메일함을 확인해주세요.',
  AUTHCODE_NO_EQUAL: '인증코드가 틀립니다.\n올바른 인증코드를 입력해주세요.',
  AUTHCODE_SUCCESS: '인증이 성공적으로 완료되었습니다.',

  NICKNAME_NOTICE: '워크스페이스에서 사용할 닉네임을 입력해주세요.',
  NICKNAME_OVER_LENGTH: '닉네임은 32자 이하로 설정해주세요.',

  TIMEBLOCK_NAME_LENGTH: '타임블록명은 25자까지 작성 가능해요',

  WORKSPACE_NAME_NOTICE: '워크스페이스명은 변경일로부터 30일 이후에 변경할 수 있습니다. \n 신중하게 결정해주세요.',
  WORKSPACE_NAME_INVALID_LENGTH: '워크스페이스명은 40자 이하로 설정해주세요.',
  WORKSPACE_NAME_EMPTY: '워크스페이스명을 입력해주세요.',
} as const;

export const FORMATTED_DATE_MAXLENGTH = 10 as const;

export const DATE_MAXLENGTH = 8 as const;

export const AUTHCODE_MAXLENGTH = 6 as const;

export const UNIV_EMAIL_FORMAT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ac\.kr|edu)$/;

export const PASSWORD_VALID_FORMAT = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
