import { Heading } from '@tiki/ui';

import { useMatch } from 'react-router-dom';

import { headerStyle } from '@/shared/component/Header/Header.style';
import RouteNav from '@/shared/component/RouteNav/RouteNav';
import { PATH } from '@/shared/constant/path';

const Header = () => {
  /** TODO: 추후 global State 혹은 localStorage에 저장 */
  const title = 'TIKI 워크스페이스';

  const isDashboardPage = useMatch(PATH.DASHBOARD);

  return (
    <header css={headerStyle}>
      <Heading tag="H1">{title}</Heading>

      {!isDashboardPage && <RouteNav />}
    </header>
  );
};

export default Header;
