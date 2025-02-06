import { IcAddTeam } from '@tiki/icon';
import { Button } from '@tiki/ui';

import { useOpenModal } from '@/shared/store/modal';

const InviteButton = () => {
  const openModal = useOpenModal();

  return (
    <Button onClick={() => openModal('invite')} size="small" variant="outline">
      <IcAddTeam width={16} height={16} />
      팀원 초대
    </Button>
  );
};

export default InviteButton;
