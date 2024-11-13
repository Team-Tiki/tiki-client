import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useOutsideClick } from '@/common/hook';

import TimeBlockBar from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar';

import { containerStyle } from '@/shared/component/TimeBlockDrawer/TimeBlockDrawer.style';
import { PATH } from '@/shared/constant/path';
import { useDrawerAction, useDrawerContent, useDrawerIsOpen } from '@/shared/store/drawer';

const TimeBlockDrawer = () => {
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

  return content ? (
    <aside ref={ref} css={containerStyle(isOpen)}>
      <TimeBlockBar content={content} closeDrawer={closeDrawer} />
    </aside>
  ) : (
    <></>
  );
};

export default TimeBlockDrawer;
