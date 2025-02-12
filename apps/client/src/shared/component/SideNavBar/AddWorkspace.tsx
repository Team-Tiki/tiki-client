import { IcAdd } from '@tiki/icon';
import { ToolTip, useToastAction } from '@tiki/ui';

import { itemStyle } from '@/shared/component/SideNavBar/index.style';
import { MAX_TEAM_COUNT } from '@/shared/constant';
import { useOpenModal } from '@/shared/store/modal';

type AddWorkspaceButtonProps = {
  disabled?: boolean;
};

const AddWorkspaceButton = ({ disabled = false }: AddWorkspaceButtonProps) => {
  const openModal = useOpenModal();
  const { createToast } = useToastAction();

  const handleWorkspaceClick = () => {
    if (disabled) {
      createToast(`워크스페이스는 최대 ${MAX_TEAM_COUNT}개까지 생성 가능합니다.`, 'error');
      return;
    }

    openModal('create-workspace');
  };

  return (
    <ToolTip message="새로운 워크스페이스 생성" position="right" gap={0.8}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleWorkspaceClick()}
        onClick={handleWorkspaceClick}
        css={itemStyle(false, false)}>
        <IcAdd width={16} height={16} />
      </div>
    </ToolTip>
  );
};

export default AddWorkspaceButton;
