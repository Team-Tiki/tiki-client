import { Meta, StoryObj } from '@storybook/react';

import ModalContainer from '@/shared/component/Modal/ModalContainer';
import { useOpenModal } from '@/shared/store/modal';

const meta: Meta<typeof ModalContainer> = {
  title: 'Shared/Modal/Delete',
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

export const Delete: Story = {
  render: () => {
    const openModal = useOpenModal();

    return (
      <>
        <button onClick={() => openModal('delete', { teamId: 1, itemId: 1, itemType: 'block' })}>
          Open Delete Modal
        </button>
        <ModalContainer />
      </>
    );
  },
};
