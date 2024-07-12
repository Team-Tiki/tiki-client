import { showCaseHandler } from '@/mock/handler/showCase';
import { timeLineHandler } from '@/mock/handler/timeLine';
import { workspaceHandler } from '@/mock/handler/workspace';

export const handlers = [...showCaseHandler, ...timeLineHandler, ...workspaceHandler];
