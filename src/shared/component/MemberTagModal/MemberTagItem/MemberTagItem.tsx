import Delete from '@/common/asset/svg/ic_invite_delete.svg?react';
import Profile from '@/common/asset/svg/ic_invite_profile.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { textStyle } from '@/shared/component/InviteModal/InviteItem/MemberItem.style';

interface MemberTagItemProps {
  name: string;
  email: string;
  profileImg?: string;
  onDelete: () => void;
}

const MemberTagItem = ({ name, email, profileImg, onDelete }: MemberTagItemProps) => {
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
        {profileImg ? (
          <img
            src={profileImg}
            alt={`${name} profile`}
            style={{ borderRadius: '50%', width: '4.4rem', height: '4.4rem', padding: '0.4rem' }}
          />
        ) : (
          <Profile width={44} height={44} />
        )}
        <Flex styles={{ direction: 'column', align: 'flex-start', gap: '0.6rem' }}>
          <Text tag="body8">{name}</Text>
          <Text tag="body8" css={textStyle}>
            {email}
          </Text>
        </Flex>
      </Flex>

      <Delete width={40} height={40} css={{ cursor: 'pointer' }} onClick={onDelete} />
    </Flex>
  );
};

export default MemberTagItem;
