import { IcCalendarVer2 } from '@tiki/icon';
import { Flex, Tag, Text, theme } from '@tiki/ui';

import { HTMLAttributes, useRef } from 'react';

import {
  containerStyle,
  contentStyle,
  detailContainerStyle,
  detailStyle,
  tagStyle,
  titleStyle,
} from '@/page/dashboard/component/Handover/ListItem/ListItem.style';
import { useNoteDetail } from '@/page/dashboard/component/Handover/hook/useNoteDetail';
import { ListTag } from '@/page/dashboard/type/listTag';
import { getVisibleTags } from '@/page/dashboard/util/alignTags';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  noteId: number;
  title: string;
  date: string;
  tags?: ListTag[];
}

const ListItem = ({ noteId, title, date, tags = [], ...props }: ListItemProps) => {
  const tagContanierRef = useRef<HTMLDivElement>(null);
  const { content, timeBlockList } = useNoteDetail(noteId);

  const visibleTags = getVisibleTags(timeBlockList, 210, 4);

  return (
    <Flex tag="li" css={containerStyle} {...props}>
      <Text tag="body6" css={titleStyle}>
        {title}
      </Text>
      <Text tag="body8" css={contentStyle}>
        {content}
      </Text>

      <Flex css={detailContainerStyle}>
        <div ref={tagContanierRef} css={[detailStyle, { display: 'flex', overflow: 'hidden' }]}>
          {visibleTags.map((tag) => {
            return (
              <Tag key={tag.id} css={tagStyle(tag.color)} bgColor={tag.color}>
                {tag.name}
              </Tag>
            );
          })}
          {visibleTags.length < tags.length && (
            <Text tag="body8" css={{ color: theme.colors.gray_500 }}>
              +{tags.length - visibleTags.length}
            </Text>
          )}
        </div>
        <Flex css={detailStyle}>
          <IcCalendarVer2 width={16} height={16} />
          <Text tag="body8" css={{ color: theme.colors.gray_800 }}>
            {`${date.substring(0, 4)}.${date.substring(5, 7)}.${date.substring(8, 10)}`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListItem;
