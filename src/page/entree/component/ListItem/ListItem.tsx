import Tag from '@/common/component/Tag/Tag';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { containerStyle, tagDateStyle } from '@/page/entree/component/ListItem/ListItem.style';

type Tag = {
  content: string;
  bgColor: string;
};

type ListItemProps = {
  title: string;
  content: string;
  date: string;
  tags?: Tag[];
};

const ListItem = ({ title, content, date, tags = [] }: ListItemProps) => {
  return (
    <div css={containerStyle}>
      <Text tag="body6">{title}</Text>
      <Text tag="body8">{content}</Text>
      <div css={tagDateStyle}>
        <div css={{ display: 'flex' }}>
          {tags.map((tag) => {
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
        </div>
        <span>
          ICON
          <Text tag="body8">{date}</Text>
        </span>
      </div>
    </div>
  );
};

export default ListItem;
