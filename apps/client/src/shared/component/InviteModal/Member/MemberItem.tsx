import { IcInviteDelete, IcInviteProfile } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import { textStyle } from '@/shared/component/InviteModal/InviteModal.style';

interface MemberItemProps {
  title: string;
  onDelete: () => void;
}

const MemberItem = ({ title, onDelete }: MemberItemProps) => {
  return (
    <Flex
      styles={{
        direction: 'row',
        align: 'center',
        justify: 'space-between',
        width: '100%',
      }}>
      <Flex
        styles={{
          direction: 'row',
          align: 'center',
          gap: '0.8rem',
        }}>
        <IcInviteProfile width={44} height={44} />
        <Text tag="body8" css={textStyle}>
          {title}
        </Text>
      </Flex>

      <IcInviteDelete width={40} height={40} css={{ cursor: 'pointer' }} onClick={onDelete} />
    </Flex>
  );
};

export default MemberItem;
