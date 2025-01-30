import { IcSettingGray } from '@tiki/icon';
import { Button } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { PATH } from '@/shared/constant/path';

const SettingButton = () => {
  const navigate = useNavigate();

  const 워크스페이스설정페이지로 = () => navigate(PATH.WORKSPACE_SETTING);

  return (
    <Button onClick={워크스페이스설정페이지로} size="small" variant="outline" css={{ padding: '0.8rem' }}>
      <IcSettingGray width={20} height={20} />
    </Button>
  );
};

export default SettingButton;
