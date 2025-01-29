import { IcAddTeam } from '@tiki/icon';
import { Button } from '@tiki/ui';

const InviteButton = () => {
  return (
    <Button
      onClick={() => {
        /** TODO: 초대 모달 오픈 */
      }}
      size="small"
      variant="outline">
      <IcAddTeam width={16} height={16} />
      팀원 초대
    </Button>
  );
};

export default InviteButton;
