import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '@/common/asset/svg/logo_tiki_md.svg?react';

import useStore from '@/shared/store/auth';

import Button from '../Button/Button';
import { headerStyle } from './Header.style';

const Header = () => {
  const { pathname } = useLocation();

  const isLogin = useStore((state) => state.isLoggedIn);

  const navigate = useNavigate();

  const regexp = new RegExp('^(/signin(/.*)?|/password(/.*)?)$');
  const isAuthPage = pathname.match(regexp);

  if (!isAuthPage) {
    return (
      <header css={headerStyle}>
        <Logo onClick={() => navigate('/showcase')} />
      </header>
    );
  }

  return (
    <header css={headerStyle}>
      <Logo onClick={() => navigate('/showcase')} />
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

export default Header;
