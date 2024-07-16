import { blockStyle, spanStyle } from '@/page/archiving/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

import Accounting from '@/common/asset/svg/accounting.svg?react';
import Event from '@/common/asset/svg/event.svg?react';
import Meeting from '@/common/asset/svg/meeting.svg?react';
import Notice from '@/common/asset/svg/notice.svg?react';
import Study from '@/common/asset/svg/study.svg?react';
import Task from '@/common/asset/svg/task.svg?react';

interface TimeBlockProps {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  blockType?: string;
  onBlockClick: () => void;
}

const TimeBlock = ({ startDate, endDate, children, color, floor, onBlockClick, blockType }: TimeBlockProps) => {
  const blockWidth = (new Date(endDate).getDate() - new Date(startDate).getDate() + 1) * 6;
  const startPosition = (new Date(startDate).getDate() - 1) * 6;

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    <div css={blockStyle(blockWidth, startPosition, floor, color)} onClick={onBlockClick}>
      {blockType === 'MEETING' ? (
        <Meeting width={46} height={46} css={{ flexShrink: 0 }} />
      ) : blockType === 'ACCOUNTING' ? (
        <Accounting width={46} height={46} css={{ flexShrink: 0 }} />
      ) : blockType === 'TASK' ? (
        <Task width={46} height={46} css={{ flexShrink: 0 }} />
      ) : blockType === 'NOTICE' ? (
        <Notice width={46} height={46} css={{ flexShrink: 0 }} />
      ) : blockType === 'STUDY' ? (
        <Study width={46} height={46} css={{ flexShrink: 0 }} />
      ) : blockType === 'EVENT' ? (
        <Event width={46} height={46} css={{ flexShrink: 0 }} />
      ) : (
        ''
      )}
      <p css={spanStyle}>{children}</p>
    </div>
  );
};

export default TimeBlock;
