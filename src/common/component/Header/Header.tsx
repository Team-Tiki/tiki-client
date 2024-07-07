import { SmallLogo } from '@/common/asset/svg';

import Button from '../Button/Button';
import { headerStyle } from './Header.style';

interface HeaderProps {
  isLogin: boolean;
}

export const DefaultHeader = () => {
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
      {isLogin ? (
        <Button variant="secondary" size="xxSmall">
          로그아웃
        </Button>
      ) : (
        <Button variant="secondary" size="xxSmall">
          로그인
        </Button>
      )}
    </header>
  );
};
