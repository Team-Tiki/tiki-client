import { create } from 'zustand';

import { ToastProps } from '@/common/component/Toast/Toast';

import { Toast } from '@/shared/type/toast';

type ToastStore = {
  toastList: Toast[];

  createToast: (message: string, variant?: Required<ToastProps>['variant']) => void;
  removeToast: (id: number) => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  toastList: [],

  createToast: (message: string, variant: Required<ToastProps>['variant'] = 'default') =>
    set((state) => ({
      toastList: [
        ...state.toastList,
        {
          id: Number(Date.now()),
          message,
          variant,
        },
      ],
    })),
  removeToast: (id: number) =>
    set((state) => ({
      toastList: state.toastList.filter((item) => item.id !== id),
    })),
}));
