import { create } from 'zustand';

// 모달의 타입을 정의
type ModalType = 'workspace' | 'category' | 'image' | 'complete' | 'block' | 'upload' | 'delete';

interface ModalState {
  // 모달 상태
  modals: {
    workspace: boolean;
    category: boolean;
    image: boolean;
    complete: boolean;
    block: boolean;
    upload: boolean;
    delete: boolean;
  };

  // 모달 상태를 토글하는 액션
  toggleModal: (type: ModalType) => void;
}

const useModalStore = create<ModalState>((set) => ({
  modals: {
    workspace: false,
    category: false,
    image: false,
    complete: false,
    block: false,
    upload: false,
    delete: false,
  },

  // 모달의 열고 닫는 행위를 토글하는 함수
  toggleModal: (type: ModalType) =>
    set((state) => ({
      modals: { ...state.modals, [type]: !state.modals[type] },
    })),
}));

// 각 모달 상태를 가져오는 훅
export const useModalState = (type: ModalType) => useModalStore((state) => state.modals[type]);

// 모달 토글 액션을 사용하는 훅
export const useToggleModal = () => useModalStore((state) => state.toggleModal);

export default useModalStore;
