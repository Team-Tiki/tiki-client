import { ToastProps } from '@/common/component/Toast/Toast';

export type Toast = {
  id: number;
  message: string;
  showDuration?: number;
  variant: Required<ToastProps>['variant'];
};
