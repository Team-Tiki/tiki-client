import { IcCalendarTag, IcInviteDelete } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

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
  onDelete: (e: React.MouseEvent) => void;
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
            <IcCalendarTag width={12} height={12} />
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
        <IcInviteDelete width={40} height={40} css={{ cursor: 'pointer' }} onClick={(e) => onDelete(e)} />
      </Flex>
    </Flex>
  );
};

export default ActivityTagItem;
