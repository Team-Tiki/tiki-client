import { Meta, StoryObj } from '@storybook/react';

import ModalContainer from '@/shared/component/Modal/ModalContainer';
import { BlockProvider } from '@/shared/hook/common/useBlockContext';
import { useOpenModal } from '@/shared/store/modal';

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
    const openModal = useOpenModal();

    return (
      <BlockProvider>
        <button onClick={() => openModal('create-block')}>Open Block Modal</button>
        <ModalContainer />
      </BlockProvider>
    );
  },
};
