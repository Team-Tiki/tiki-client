import { termStyle, wrapperStyle } from '@/page/signUp/index/component/TermArea/TermArea.style';

import { HTMLAttributes } from 'react';

import Check from '@/common/asset/svg/check.svg?react';
import CheckActive from '@/common/asset/svg/check_active.svg?react';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

interface TermAreaProps extends HTMLAttributes<HTMLDivElement> {
  term: string;
  isChecked: boolean;
  isRequired?: boolean;
}

const TermArea = ({ term, isChecked, isRequired = true, children, ...props }: TermAreaProps) => {
  return (
    <div css={wrapperStyle} {...props}>
      <Text css={termStyle} tag="body4">
        {isChecked ? <CheckActive /> : <Check />}
        {term}
        <Text css={{ color: theme.colors.blue_900 }} tag="body4">
          {isRequired ? '[필수]' : '[선택]'}
        </Text>
      </Text>

      {children}
    </div>
  );
};

export default TermArea;
