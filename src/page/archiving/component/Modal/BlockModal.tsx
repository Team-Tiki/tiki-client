import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

interface BlockModalProps {}

const BlockModal = ({}: BlockModalProps) => {
  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }}>
      <Heading tag="H5" css={{ fontWeight: 600 }}>
        블록 생성하기
      </Heading>
      <Text css={{ marginTop: '1.2rem' }} tag="body4">
        타임라인에 생성할 블록 정보를 입력해주세요
      </Text>
    </Flex>
  );
};

export default BlockModal;
