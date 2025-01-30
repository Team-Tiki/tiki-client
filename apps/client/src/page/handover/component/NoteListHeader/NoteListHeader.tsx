import { Flex, Text } from '@tiki/ui';

import { containerStyle } from '@/page/handover/component/NoteListHeader/NoteListHeader.style';

interface NoteListHeaderProps {
  canSelect: boolean;
}

const NoteListHeader = ({ canSelect }: NoteListHeaderProps) => {
  return (
    <Flex tag="header" styles={{ justify: 'space-between' }} css={containerStyle(canSelect)}>
      <Flex>
        <Text tag="body8" style={{ width: '29.4rem' }}>
          활동 기간
        </Text>
        <Text tag="body8" style={{ width: '34rem' }}>
          노트 제목
        </Text>
      </Flex>

      <Flex styles={{ marginRight: '7.7rem' }}>
        <Text tag="body8" style={{ width: '13.8rem' }}>
          작성자
        </Text>
        <Text tag="body8" style={{ width: '6.1rem' }}>
          작성여부
        </Text>
      </Flex>
    </Flex>
  );
};

export default NoteListHeader;
