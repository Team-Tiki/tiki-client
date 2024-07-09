/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';

interface Store {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useStore = create<Store>((set) => ({
  isLoggedIn: false,

  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));

export default useStore;
