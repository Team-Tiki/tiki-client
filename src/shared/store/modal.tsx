import { create } from 'zustand';

import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';

// 모달의 타입을 정의
type ModalType = 'workspace' | 'category' | 'image' | 'complete' | 'block' | 'upload' | 'delete';

interface ModalState {
  modals: {
    workspace: boolean;
    category: boolean;
    image: boolean;
    complete: boolean;
    block: boolean;
    upload: boolean;
    delete: boolean;
  };
  step: number; // 현재 모달의 단계
  stepComponents: { [key: number]: JSX.Element }; // 각 단계에 해당하는 컴포넌트 매핑
  toggleModal: (type: ModalType) => void;
  setStep: (step: number) => void; // 모달 단계 설정 함수
  nextStep: () => void; // 다음 단계로 넘어가는 함수
  resetStep: () => void; // 단계 초기화 함수
}

export const useModalStore = create<ModalState>((set) => ({
  modals: {
    workspace: false,
    category: false,
    image: false,
    complete: false,
    block: false,
    upload: false,
    delete: false,
  },
  step: 1, // 초기 단계 설정
  stepComponents: {
    1: <WorkSpaceName />,
    2: <WorkSpaceCategory />,
    3: <WorkSpaceImage />,
    4: <WorkSpaceComplete />,
  },
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
export const useModalComponent = () => useModalStore((state) => state.stepComponents[state.step]);
export const useNextStep = () => useModalStore((state) => state.nextStep);
export const useResetStep = () => useModalStore((state) => state.resetStep);
export const useToggleModal = () => useModalStore((state) => state.toggleModal);

export default useModalStore;
