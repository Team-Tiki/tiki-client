import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CloseButton from '@/common/asset/svg/ic_close.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { useOutsideClick } from '@/common/hook';

import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { formattingDate } from '@/page/archiving/index/util/date';

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
      <CloseButton />
      <Flex>
        {BLOCK_ICON.find((icon) => icon.name === content.blockType)?.icon(content.color)}
        <Button>수정하기</Button>
      </Flex>
      <Heading>{content.title}</Heading>
      <Text>
        {formattingDate(content.startDate)} ~ {formattingDate(content.endDate)}
      </Text>
    </aside>
  ) : (
    <></>
  );
};

export default TimeBlockDrawer;
