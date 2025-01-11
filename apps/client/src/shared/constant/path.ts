export const PATH = {
  ROOT: '/',
  LANDING: '/',

  LOGIN: '/login',

  SIGNUP: '/signup',
  SIGNUP_INFO: '/signup-info',
  SIGNUP_UNIV: '/signup-univ',

  PASSWORD_AUTH: '/password-auth',
  PASSWORD_RESET: '/password-reset',

  DASHBOARD: '/dashboard',
  ARCHIVING: '/archiving',
  SHOWCASE: '/showcase',
  DRIVE: '/drive',
  DELETED: '/deleted',
  HANDOVER: '/handover',
  HANDOVER_NOTE: `/handover/:noteId`,
  CREATE_HANDOVER_NOTE: '/handover/create-note',
  WORKSPACE_SETTING: '/workspace-setting',
  COMING_SOON: '/comingsoon',
  ONBOARDING: '/onboarding',
} as const;
