import CloseButton from '@/common/asset/svg/ic_close.svg?react';
import CommandButton from '@/common/component/CommandButton/CommandButton';
import Flex from '@/common/component/Flex/Flex';

import BlockInfo from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo';
import TaggedNotes from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNotes';
import { circleStyle, closeBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import UploadedFiles from '@/page/archiving/index/component/TimeBlockBar/UploadedFiles/UploadedFiles';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';

import { DrawerContent } from '@/shared/store/drawer';

interface TimeBlockBarProps {
  content: DrawerContent;
}

const TimeBlockBar = ({ content }: TimeBlockBarProps) => {
  return (
    content && (
      <>
        <CloseButton width={16} height={16} css={closeBtnStyle} />

        <Flex styles={{ justify: 'space-between', marginTop: '7.4rem' }}>
          <Flex css={circleStyle(content.color)}>
            {BLOCK_ICON.find((icon) => icon.name === content.blockType)?.icon(content.color)}
          </Flex>
          <CommandButton variant="secondary" commandKey="E" size="xSmall">
            수정하기
          </CommandButton>
        </Flex>

        <Flex styles={{ direction: 'column', gap: '3.6rem' }}>
          <BlockInfo title={content.title} startDate={content.startDate} endDate={content.endDate} />
          <TaggedNotes />
          <UploadedFiles />
        </Flex>
      </>
    )
  );
};

export default TimeBlockBar;
