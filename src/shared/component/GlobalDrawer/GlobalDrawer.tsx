import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Heading from '@/common/component/Heading/Heading';
import { useOutsideClick } from '@/common/hook';

import { containerStyle } from '@/shared/component/GlobalDrawer/GlobalDrawer.style';
import { PATH } from '@/shared/constant/path';
import { useDrawerAction, useDrawerContent, useDrawerIsOpen } from '@/shared/store/drawer';

const GlobalDrawer = () => {
  const isOpen = useDrawerIsOpen();
  const { closeDrawer } = useDrawerAction();
  const content = useDrawerContent();

  const { pathname } = useLocation();

  const ref = useOutsideClick(closeDrawer);

  useEffect(() => {
    /** Open 상태에서 라우트 이동 시 닫음 */
    if (isOpen && pathname !== PATH.ARCHIVING) {
      closeDrawer();
    }
  }, [isOpen, closeDrawer, pathname]);

  return (
    <aside ref={ref} css={containerStyle(isOpen)}>
      <Heading>{content?.title}</Heading>

      {content?.startDate}
      {content?.endDate}
    </aside>
  );
};

export default GlobalDrawer;
