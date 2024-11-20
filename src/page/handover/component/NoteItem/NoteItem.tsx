import avartar from '@/common/asset/svg/ic_avatar.svg';
import MoreIcButton from '@/common/asset/svg/ic_more.svg?react';
import CheckBox from '@/common/component/CheckBox/CheckBox';
import Divider from '@/common/component/Divider/Divider';
import Flex from '@/common/component/Flex/Flex';
import Tag from '@/common/component/Tag/Tag';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { formattingDate } from '@/page/archiving/index/util/date';
import { containerStyle, moreButtonStyle, profileStyle } from '@/page/handover/component/NoteItem/NoteItem.style';

interface NoteItemProps {
  startDate: Date;
  endDate: Date;
  title: string;
  writer: string;
  isFinished: boolean;
  canSelect: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const NoteItem = ({
  startDate,
  endDate,
  title,
  writer,
  isFinished,
  canSelect,
  isSelected,
  onSelect,
}: NoteItemProps) => {
  return (
    <li>
      <Flex styles={{ align: 'center' }}>
        <Flex styles={{ align: 'center', justify: 'left' }} css={containerStyle}>
          <Flex styles={{ align: 'center' }}>
            {canSelect && (
              <CheckBox isChecked={isSelected} onChange={() => onSelect?.()} style={{ marginRight: '1.6rem' }} />
            )}
            <Text tag="body6" style={{ width: '26rem' }}>
              {`${formattingDate(startDate)} - ${formattingDate(endDate)}`}
            </Text>
          </Flex>

          <Text tag="body6" style={{ width: '34rem' }}>
            {title}
          </Text>
          <Flex styles={{ align: 'center', gap: '0.4rem' }}>
            <img src={avartar} alt="작성자 프로필" css={profileStyle} />
            <Text tag="body6" style={{ width: '10.4rem' }}>
              {writer}
            </Text>
          </Flex>
          <Flex styles={{ align: 'center', gap: isFinished ? '4.3rem' : '3.3rem' }}>
            {isFinished ? (
              <Tag variant="square" bgColor={theme.colors.key_400}>
                작성 완료
              </Tag>
            ) : (
              <Tag variant="square" bgColor={theme.colors.gray_300}>
                작성 미완료
              </Tag>
            )}
            <MoreIcButton width={18} height={18} css={moreButtonStyle} />
          </Flex>
        </Flex>
      </Flex>
      <Divider color={theme.colors.gray_300} />
    </li>
  );
};

export default NoteItem;
