import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Flex, Select } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import WorkSpaceComplete from '@/shared/component/WorkSpaceModal/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage';
import WorkSpaceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import WorkSpaceName from '@/shared/component/WorkSpaceModal/name/WorkSpaceName';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';

const meta: Meta<typeof WorkSpaceProvider> = {
  title: 'Shared/WorkSpaceModal',
  component: WorkSpaceProvider,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <WorkSpaceProvider>
        <Story />
      </WorkSpaceProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NameStep: Story = {
  render: () => {
    return <WorkSpaceName isVisible={true} />;
  },
};

export const CompleteStep: Story = {
  render: () => {
    return <WorkSpaceComplete isVisible={true} />;
  },
};

export const SelectCategoryStep: Story = {
  render: () => {
    const { isOpen, toggle } = useOverlay();

    return (
      <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={Style}>
        <WorkSpaceInfo step="category" title="새로운 워크 스페이스 생성하기" info="팀 카테고리를 선택해주세요." />
        <div css={{ width: '32rem', marginTop: '2.4rem' }}>
          <Select
            css={{
              '& ul': {
                maxHeight: '25rem',
              },
            }}
            placeholder="선택"
            variant="outline"
            isOpen={isOpen}
            onTrigger={toggle}
            onSelect={toggle}
            options={[{ value: '옵션 1입니다' }, { value: '옵션 2입니다' }]}
            className="select-container"
          />
        </div>
        <Button css={{ width: '100%', marginTop: '18.8rem' }} variant="primary" size="medium">
          다음
        </Button>
      </Flex>
    );
  },
};

export const ImageUploadStep: Story = {
  render: () => {
    return <WorkSpaceImage isVisible={true} />;
  },
};

const Style = css({
  height: '40rem',
});
