import { Meta, StoryObj } from '@storybook/react';

import ModalContainer from '@/shared/component/Modal/ModalContainer';
import { useOpenModal } from '@/shared/store/modal';

const meta: Meta<typeof ModalContainer> = {
  title: 'Shared/Modal/Deleted',
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

export const Deleted: Story = {
  render: () => {
    const openModal = useOpenModal();

    return (
      <>
        <button onClick={() => openModal('deleted', { itemType: 'trash' })}>Open Trash Deleted Modal</button>
        <button onClick={() => openModal('deleted', { itemType: 'permanent' })}>Open Permanent Deleted Modal</button>
        <ModalContainer />
      </>
    );
  },
};
