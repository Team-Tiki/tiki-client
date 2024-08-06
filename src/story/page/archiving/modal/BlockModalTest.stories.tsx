import { Meta, StoryObj } from '@storybook/react';

import ModalContainer from '@/common/component/Modal/ModalContainer';

import { BlockFlow } from '@/shared/component/ModalFlow/BlockFlow';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { useModalStore } from '@/shared/store/modal';

const meta: Meta<typeof ModalContainer> = {
  title: 'page/Modal/Block',
  component: ModalContainer,
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: false,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BlockModalTest: Story = {
  render: () => {
    const { openModal } = useModalStore();

    return (
      <BlockProvider>
        <button onClick={() => openModal(<BlockFlow />)}>Open Block Modal</button>
        <ModalContainer />
      </BlockProvider>
    );
  },
};
