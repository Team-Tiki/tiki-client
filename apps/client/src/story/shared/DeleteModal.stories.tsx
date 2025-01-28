import { Meta, StoryObj } from '@storybook/react';

import ModalFunnel from '@/shared/component/Modal/ModalFunnel';
import { useOpenModal } from '@/shared/store/modal';

const meta: Meta<typeof ModalFunnel> = {
  title: 'Shared/Modal/Deleted',
  component: ModalFunnel,
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Deleted: Story = {
  render: () => {
    const openModal = useOpenModal();

    return (
      <>
        <button onClick={() => openModal('deleted')}>Open Trash Deleted Modal</button>
        <ModalFunnel />
      </>
    );
  },
};
