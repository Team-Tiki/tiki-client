import { useEffect, useState } from 'react';

import avartar from '@/common/asset/svg/ic_avatar.svg';
import MoreIcButton from '@/common/asset/svg/ic_more.svg?react';
import CheckBox from '@/common/component/CheckBox/CheckBox';
import Divider from '@/common/component/Divider/Divider';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { formattingDate } from '@/page/archiving/index/util/date';
import {
  containerStyle,
  finishedStyle,
  noteTitleStyle,
  periodStyle,
  profileStyle,
  writerStyle,
} from '@/page/handover/component/NoteItem/NoteItem.style';

interface NoteItemProps {
  startDate: Date;
  endDate: Date;
  title: string;
  writer: string;
  isFinished: boolean;
  activeSelect: boolean;
  isTotalChecked: boolean;
}

const NoteItem = ({ startDate, endDate, title, writer, isFinished, activeSelect, isTotalChecked }: NoteItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isTotalChecked);
  }, [isTotalChecked]);

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <>
      <Flex styles={{ align: 'center' }}>
        <Flex tag="li" styles={{ align: 'center', justify: 'left' }} css={containerStyle}>
          <Flex styles={{ align: 'center' }}>
            {activeSelect && (
              <CheckBox isChecked={isChecked} onChange={handleCheck} style={{ marginRight: '1.6rem' }} />
            )}
            <Text tag="body6" css={periodStyle}>
              {`${formattingDate(startDate)} - ${formattingDate(endDate)}`}
            </Text>
          </Flex>

          <Text tag="body6" css={noteTitleStyle}>
            {title}
          </Text>
          <Flex styles={{ align: 'center', gap: '0.4rem' }}>
            <img src={avartar} alt="작성자 프로필" css={profileStyle} />
            <Text tag="body6" css={writerStyle}>
              {writer}
            </Text>
          </Flex>
          <Flex styles={{ align: 'center', gap: isFinished ? '4.3rem' : '3.3rem' }}>
            <Text tag="body8" css={finishedStyle(isFinished)}>
              {isFinished ? '작성 완료' : '작성 미완료'}
            </Text>
            <MoreIcButton width={18} height={18} />
          </Flex>
        </Flex>
      </Flex>
      <Divider color={theme.colors.gray_300} />
    </>
  );
};

export default NoteItem;
