import Heading from '@/common/component/Heading/Heading';

import { headerStyle } from '@/shared/component/Header/Header.style';
import RouteNav from '@/shared/component/RouteNav/RouteNav';

const Header = () => {
  /** TODO: 추후 global State 혹은 localStorage에 저장 */
  const title = 'TIKI 워크스페이스';

  return (
    <header css={headerStyle}>
      <Heading tag="H1">{title}</Heading>

      <RouteNav />
    </header>
  );
};

export default Header;
