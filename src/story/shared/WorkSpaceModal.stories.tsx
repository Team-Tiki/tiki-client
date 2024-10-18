import { Meta, StoryObj } from '@storybook/react';

import WorkSpaceComplete from '@/shared/component/WorkSpaceModal/complete/WorkSpaceComplete';
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

export const Name: Story = {
  render: () => {
    return <WorkSpaceName isVisible={true} />;
  },
};

export const Complete: Story = {
  render: () => {
    return <WorkSpaceComplete isVisible={true} />;
  },
};
