import { MiddleLogo, SmallLogo } from '@/common/asset/svg';

import Button from '../Button/Button';
import { headerStyle, logoutBtnStyle, spanStyle } from './Header.style';

interface Props {
  isLogin: boolean;
}

const Header = ({ isLogin = false }: Props) => {
  return (
    <header css={headerStyle}>
      <span css={spanStyle}>{isLogin ? <SmallLogo /> : <MiddleLogo />}</span>
      {isLogin && (
        <Button variant="secondary" size="xxSmall" css={logoutBtnStyle}>
          로그아웃
        </Button>
      )}
    </header>
  );
};

export default Header;
