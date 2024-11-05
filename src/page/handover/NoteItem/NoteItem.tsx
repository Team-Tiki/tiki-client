import { useState } from 'react';

import avartar from '@/common/asset/svg/ic_avatar.svg';
import MoreIcButton from '@/common/asset/svg/ic_more.svg?react';
import CheckBox from '@/common/component/CheckBox/CheckBox';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { formattingDate } from '@/page/archiving/index/util/date';
import {
  containerStyle,
  finishedStyle,
  noteTitleStyle,
  periodStyle,
  profileStyle,
} from '@/page/handover/NoteItem/NoteItem.style';

interface NoteItemProps {
  startDate: Date;
  endDate: Date;
  title: string;
  writer: string;
  isFinished: boolean;
  activeSelect: boolean;
}

const NoteItem = ({ startDate, endDate, title, writer, isFinished, activeSelect }: NoteItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <Flex tag="li" styles={{ align: 'center', justify: 'left' }} css={containerStyle}>
      {activeSelect && <CheckBox isChecked={isChecked} onChange={handleCheck} style={{ marginRight: '1.6rem' }} />}
      <Text
        tag="body6"
        css={periodStyle(activeSelect)}>{`${formattingDate(startDate)} - ${formattingDate(endDate)}`}</Text>
      <Text tag="body6" css={noteTitleStyle}>
        {title}
      </Text>

      <img src={avartar} alt="작성자 프로필" css={profileStyle} />
      <Text tag="body6" style={{ width: '13rem' }}>
        {writer}
      </Text>

      <Text tag="body6" css={finishedStyle(isFinished)}>
        {isFinished ? '작성 완료' : '작성 미완료'}
      </Text>

      <MoreIcButton width={18} height={18} />
    </Flex>
  );
};

export default NoteItem;
