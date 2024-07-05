import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/common/component/Modal/Modal';
import useModal from '@/common/hooks/Modal/useModal';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: false,
    onClose: () => {},
    children: null,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={closeModal}>
          <div>
            {args.children || 'Modal Content'}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    children: 'This is a modal',
  },
};
