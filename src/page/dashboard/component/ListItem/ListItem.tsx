import { HTMLAttributes, useEffect, useState } from 'react';

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
  titleStyle,
} from '@/page/dashboard/component/ListItem/ListItem.style';
import { ListTag } from '@/page/dashboard/type/listTag';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  date: Date;
  tags?: ListTag[];
}

const ListItem = ({ title, content, date, tags = [], ...props }: ListItemProps) => {
  const [tagCount, setTagCount] = useState(0);

  useEffect(() => {
    let length = 0,
      count = 0,
      flag = 0;

    tags.forEach((tag) => {
      if (!flag) {
        count++;
        switch (tag.content) {
          case 'meeting':
            length += 64;
            break;
          case 'study':
            length += 51;
            break;
          case 'recruiting':
            length += 100;
            break;
          case 'event':
            length += 51;
            break;
          case 'notice':
            length += 54;
            break;
          case 'task':
            length += 44;
            break;
        }
      }
      if (length >= 204) {
        flag = 1;
      }
    });

    setTagCount(count - flag);
  }, [tags]);

  return (
    <Flex tag="li" css={containerStyle} {...props}>
      <Text tag="body6" css={titleStyle}>
        {title}
      </Text>
      <Text tag="body8" css={contentStyle}>
        {content}
      </Text>

      <Flex css={detailContainerStyle}>
        <Flex css={[detailStyle, { minWidth: '20rem' }]}>
          {tags.map((tag, index) => {
            if (index >= tagCount) {
              return;
            }
            return (
              <Tag
                css={{
                  color: (() => {
                    switch (tag.bgColor) {
                      case '#FFE6E8':
                        return theme.colors.red_200;
                      case '#F8E2CB':
                        return theme.colors.yellow_200;
                      case '#C4F2E5':
                        return theme.colors.green_200;
                      case '#DCD8FA':
                        return theme.colors.purple_200;
                      case '#E2E8F8':
                        return theme.colors.blue_200;
                      case '#F8E1F5':
                        return theme.colors.pink_200;
                      case '#D3EFFA':
                        return theme.colors.sky_200;
                      default:
                        return theme.colors.white;
                    }
                  })(),
                }}
                bgColor={tag.bgColor}>
                {tag.content}
              </Tag>
            );
          })}
          {tagCount < tags.length && (
            <Text tag="body8" css={{ color: theme.colors.gray_500 }}>
              +{tags.length - tagCount}
            </Text>
          )}
        </Flex>
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
