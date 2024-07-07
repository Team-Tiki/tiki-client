import { MiddleLogo, SmallLogo } from '@/common/asset/svg';

import Button from '../Button/Button';
import { headerStyle } from './Header.style';

interface HeaderProps {
  isLogin: boolean;
}

const Header = ({ isLogin = false }: HeaderProps) => {
  return (
    <header css={headerStyle}>
      <span>{isLogin ? <SmallLogo /> : <MiddleLogo />}</span>
      {isLogin && (
        <Button variant="secondary" size="xxSmall">
          로그아웃
        </Button>
      )}
    </header>
  );
};

export default Header;
