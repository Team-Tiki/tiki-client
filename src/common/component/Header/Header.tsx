import { MiddleLogo, SmallLogo } from '@/common/asset/svg';

import { headerStyle, logoutBtnStyle, spanStyle } from './Header.style';

interface Props {
  isLogin: boolean;
}

const Header = ({ isLogin = false }: Props) => {
  return (
    <header css={headerStyle}>
      <span css={spanStyle}>{isLogin ? <SmallLogo /> : <MiddleLogo />}</span>
      {isLogin && <button css={logoutBtnStyle}>로그아웃</button>}
    </header>
  );
};

export default Header;
