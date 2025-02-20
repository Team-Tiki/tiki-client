import { IcCalendarTag, IcInviteDelete } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import {
  dateStyle,
  iconBackStyle,
  layoutStyle,
  tagNameStyle,
  tagStyle,
  wrapperStyle,
} from '@/shared/component/ActivityTagModal/ActivityTagItem/ActivityTagItem.style';
import { TAG_ICON } from '@/shared/constant/icon';

interface ActivityTagItemProps {
  title: string;
  date: string;
  tag: string;
  color: string;
  onDelete: () => void;
  isSearch?: boolean;
}

const ActivityTagItem = ({ title, date, tag, color, onDelete, isSearch = false }: ActivityTagItemProps) => {
  const icon = TAG_ICON.find((iconItem) => iconItem.name === tag)?.icon;

  return (
    <Flex css={wrapperStyle}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <div css={iconBackStyle}>{icon}</div>
        <Flex css={layoutStyle}>
          <Text tag="body8" css={tagNameStyle}>
            {title}
          </Text>
          <Flex styles={{ align: 'center', gap: '0.4rem' }}>
            <IcCalendarTag width={12} height={12} />
            <Text tag="body8" css={dateStyle}>
              {date}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex styles={{ align: 'center', gap: '0.4rem' }}>
        <Text tag="body8" css={tagStyle(color)}>
          {tag.toLowerCase()}
        </Text>
        {!isSearch && <IcInviteDelete width={40} height={40} css={{ cursor: 'pointer' }} onClick={onDelete} />}
      </Flex>
    </Flex>
  );
};

export default ActivityTagItem;
