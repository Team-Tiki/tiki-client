import { create } from 'zustand';

import { ToastProps } from '@/common/component/Toast/Toast';

import { Toast } from '@/shared/type/toast';

type ToastStore = {
  toastList: Toast[];

  actions: {
    createToast: (message: string, variant?: Required<ToastProps>['variant']) => void;
    removeToast: (id: number) => void;
  };
};

const useToastStore = create<ToastStore>((set) => ({
  toastList: [],

  actions: {
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
  },
}));

export const useToastList = () => useToastStore((state) => state.toastList);

export const useToastAction = () => useToastStore((state) => state.actions);
