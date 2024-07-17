import { ACCESS_TOKEN_KEY } from '@/shared/constant/api';
import useStore from '@/shared/store/auth';

export const useLogout = () => {
  const { isLoggedIn, logout } = useStore();

  if (!isLoggedIn) return;

  logout();

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const refreshToken = localStorage.getItem('refresh');

  if (accessToken || refreshToken) {
    localStorage.clear();
  }
};
