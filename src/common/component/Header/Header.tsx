import { SmallLogo } from '@/common/asset/svg';

import Button from '../Button/Button';
import { headerStyle } from './Header.style';

interface HeaderProps {
  isLogin: boolean;
}

export const Header = () => {
  return (
    <header css={headerStyle}>
      <SmallLogo />
    </header>
  );
};

export const UserHeader = ({ isLogin = false }: HeaderProps) => {
  return (
    <header css={headerStyle}>
      <SmallLogo />
      <Button variant="secondary" size="xxSmall">
        {isLogin ? '로그아웃' : '로그인'}
      </Button>
    </header>
  );
};
