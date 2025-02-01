import { IcAdd } from '@tiki/icon';
import { ToolTip } from '@tiki/ui';

import { itemStyle } from '@/shared/component/SideNavBar/index.style';
import { useOpenModal } from '@/shared/store/modal';

const AddWorkspaceButton = () => {
  const openModal = useOpenModal();

  const handleWorkspaceClick = () => {
    openModal('create-workspace');
  };

  return (
    <ToolTip message="새로운 워크스페이스 생성" position="right" gap={0.8}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleWorkspaceClick()}
        onClick={handleWorkspaceClick}
        css={itemStyle(false)}>
        <IcAdd width={16} height={16} />
      </div>
    </ToolTip>
  );
};

export default AddWorkspaceButton;
