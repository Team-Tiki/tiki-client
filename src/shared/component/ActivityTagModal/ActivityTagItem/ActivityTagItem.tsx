import CalenderIcon from '@/common/asset/svg/ic_calendar_tag.svg?react';
import Delete from '@/common/asset/svg/ic_invite_delete.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import {
  iconBackStyle,
  tagStyle,
  textStyle,
} from '@/shared/component/ActivityTagModal/ActivityTagItem/ActivityTagItem.style';
import { TAG_ICON } from '@/shared/constant/icon';

interface ActivityTagItemProps {
  title: string;
  date: string;
  tag: string;
  color: string;
  onDelete: () => void;
}

const ActivityTagItem = ({ title, date, tag, color, onDelete }: ActivityTagItemProps) => {
  const icon = TAG_ICON.find((iconItem) => iconItem.name === tag)?.icon;

  return (
    <Flex
      styles={{
        direction: 'row',
        align: 'center',
        justify: 'space-between',
        width: '100%',
        padding: '0.4rem 0rem',
      }}>
      <Flex
        styles={{
          direction: 'row',
          align: 'center',
          gap: '0.8rem',
        }}>
        <div css={iconBackStyle}>{icon}</div>
        <Flex styles={{ direction: 'column', align: 'flex-start', gap: '0.6rem' }}>
          <Text tag="body8">{title}</Text>
          <Flex styles={{ direction: 'row', align: 'center', gap: '0.4rem' }}>
            <CalenderIcon width={12} height={12} />
            <Text tag="body8" css={textStyle}>
              {date}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex styles={{ direction: 'row', align: 'center', gap: '0.4rem' }}>
        <Text tag="body8" css={tagStyle(color)}>
          {tag.toLowerCase()}
        </Text>
        <Delete width={40} height={40} css={{ cursor: 'pointer' }} onClick={onDelete} />
      </Flex>
    </Flex>
  );
};

export default ActivityTagItem;
