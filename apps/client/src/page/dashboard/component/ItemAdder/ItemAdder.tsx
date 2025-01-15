import { IcMainAdd } from '@tiki/icon';
import { theme } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { adderStyle } from '@/page/dashboard/component/ItemAdder/ItemAdder.styles';

const ItemAdder = ({ path }: { path: string }) => {
  const navigate = useNavigate();

  return (
    <button
      css={adderStyle(path)}
      onClick={() => {
        navigate(path);
      }}>
      <IcMainAdd width={40} fill={theme.colors.gray_400} />
    </button>
  );
};

export default ItemAdder;
