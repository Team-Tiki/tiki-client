import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import UploadModal from '@/page/archiving/createTimeBlock/component/Upload/UploadModal';

import { create } from 'zustand';

import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';
import { ModalType } from '@/shared/type/block';

interface DeleteModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ModalState {
  modals: {
    [key in ModalType]: boolean;
  };
  step: number;
  toggleModal: (type: ModalType) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  resetStep: () => void;
}

export const useDeleteModalStore = create<DeleteModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useModalStore = create<ModalState>((set) => ({
  modals: {
    workspace: false,
    category: false,
    image: false,
    complete: false,
    block: false,
    upload: false,
    deleteBlock: false,
    deleteDocs: false,
  },
  modalData: null,
  step: 1,
  toggleModal: (type: ModalType) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [type]: !state.modals[type],
      },
    })),
  setStep: (step: number) => set({ step }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  resetStep: () => set({ step: 1 }),
}));

export const useModalState = (type: ModalType) => useModalStore((state) => state.modals[type]);
export const useModalStep = () => useModalStore((state) => state.step);

export const useModalComponent = () => {
  const { modals, step } = useModalStore();
  const activeModalType = (Object.keys(modals) as ModalType[]).find((key) => modals[key]);

  if (!activeModalType) return null;

  switch (activeModalType) {
    case 'workspace':
      switch (step) {
        case 1:
          return <WorkSpaceName />;
        case 2:
          return <WorkSpaceCategory />;
        case 3:
          return <WorkSpaceImage />;
        case 4:
          return <WorkSpaceComplete />;
        default:
          return null;
      }
    case 'block':
      switch (step) {
        case 1:
          return <BlockModal />;
        case 2:
          return <UploadModal />;
        default:
          return null;
      }
    default:
      return null;
  }
};

export const useNextStep = () => useModalStore((state) => state.nextStep);
export const useResetStep = () => useModalStore((state) => state.resetStep);
export const useToggleModal = () => useModalStore((state) => state.toggleModal);
