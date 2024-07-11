import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/common/component/Modal/Modal';
import { useModal } from '@/common/hook/useModal';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal/Delete',
  component: Modal,
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
    const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

    return (
      <div>
        <button onClick={() => openModal(<DeleteModal title="block" detail="block" onClose={closeModal} />)}>
          Open Modal
        </button>
        <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
      </div>
    );
  },
};
