import { boxStyle, buttonStyle, textStyle } from '@/page/archiving/component/Modal/File/Add/BlockAdd.style';

import PlusIcon from '@/common/asset/svg/plus-gray.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

interface BlockAddProps {}

const BlockAdd = ({}: BlockAddProps) => {
  return (
    <Flex
      styles={{
        direction: 'column',
        justify: 'center',
        align: 'center',
        padding: '3.4rem 6.35rem',
        width: '37.5rem',
      }}
      css={boxStyle}>
      <PlusIcon width={36} height={36} />
      <Text tag="body6" css={{ marginTop: '1.6rem' }}>
        업로드할 파일을 여기로 드래그 하세요
      </Text>
      <Flex
        styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.3rem' }}
        css={{ marginTop: '1.6rem' }}>
        <Text tag="body6">또는</Text>
        <button type="button" css={buttonStyle}>
          여기를 클릭
        </button>
        <Text tag="body6">하여</Text>
      </Flex>
      <Text tag="body6" css={{ marginTop: '0.5rem' }}>
        업로드할 파일을 선택하세요
      </Text>
    </Flex>
  );
};

export default BlockAdd;
