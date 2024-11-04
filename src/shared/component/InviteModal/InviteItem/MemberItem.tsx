import Delete from '@/common/asset/svg/ic_invite_delete.svg?react';
import InviteProfile from '@/common/asset/svg/ic_invite_profile.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { textStyle } from '@/shared/component/InviteModal/InviteItem/MemberItem.style';

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
        <InviteProfile width={44} height={44} />
        <Text tag="body8" css={textStyle}>
          {title}
        </Text>
      </Flex>

      <Delete width={40} height={40} css={{ cursor: 'pointer' }} onClick={onDelete} />
    </Flex>
  );
};

export default MemberItem;
