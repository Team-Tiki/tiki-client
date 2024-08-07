import { create } from 'zustand';

interface Store {
  isLoggedIn: boolean;

  actions: {
    login: () => void;
    logout: () => void;
  };
}

const useStore = create<Store>((set) => ({
  isLoggedIn: false,

  actions: {
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
  },
}));

export const useIsLoggedIn = () => useStore((state) => state.isLoggedIn);

export const useAuth = () => useStore((state) => state.actions);
