import { IcMainAdd } from '@tiki/icon';
import { theme } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { adderStyle } from '@/page/dashboard/component/File/ItemAdder/ItemAdder.styles';

import { PATH } from '@/shared/constant/path';

const ItemAdder = () => {
  const navigate = useNavigate();

  return (
    <button
      css={adderStyle}
      onClick={() => {
        navigate(PATH.DRIVE);
      }}>
      <IcMainAdd width={40} fill={theme.colors.gray_400} />
    </button>
  );
};

export default ItemAdder;
