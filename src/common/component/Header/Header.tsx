import SmallLogo from '@/common/asset/svg/logo_tiki_md.svg?react';

import Button from '../Button/Button';
import { headerStyle } from './Header.style';

interface HeaderProps {
  isLogin: boolean;
  isAuthPage: boolean;
}

export const Header = ({ isLogin = false, isAuthPage }: HeaderProps) => {
  if (!isAuthPage) {
    return (
      <header css={headerStyle}>
        <SmallLogo width={100} height={40} />
      </header>
    );
  }

  return (
    <header css={headerStyle}>
      <SmallLogo width={100} height={40} />
      <div>
        {isLogin ? (
          <Button variant="secondary" size="small">
            로그아웃
          </Button>
        ) : (
          <Button variant="secondary" size="small">
            로그인
          </Button>
        )}
      </div>
    </header>
  );
};
