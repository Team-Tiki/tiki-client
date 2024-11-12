import { HTMLAttributes, useRef } from 'react';

import Calender from '@/common/asset/svg/ic_calendar_ver2.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Tag from '@/common/component/Tag/Tag';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import {
  containerStyle,
  contentStyle,
  detailContainerStyle,
  detailStyle,
  tagStyle,
  titleStyle,
} from '@/page/dashboard/component/Handover/ListItem/ListItem.style';
import { ListTag } from '@/page/dashboard/type/listTag';
import { getVisibleTags } from '@/page/dashboard/util/alignTags';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  date: Date;
  tags?: ListTag[];
}

const ListItem = ({ title, content, date, tags = [], ...props }: ListItemProps) => {
  const tagContanierRef = useRef<HTMLDivElement>(null);
  const visibleTags = getVisibleTags(tags, 210, 4);

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
              <Tag key={tag.tagId} css={tagStyle(tag.bgColor)} bgColor={tag.bgColor}>
                {tag.content}
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
          <Calender width={16} height={16} />
          <Text tag="body8" css={{ color: theme.colors.gray_800 }}>
            {`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListItem;
