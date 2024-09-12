import type { Meta, StoryObj } from '@storybook/react';

import Modal from '@/common/component/Modal/Modal';
import { useOverlay } from '@/common/hook';

const meta = {
  title: 'Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: false,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { open, close, isOpen } = useOverlay();

    return (
      <>
        <button onClick={open}>Open</button>
        <Modal onClose={close} isOpen={isOpen}>
          <div>
            <h1>This is Modal</h1>
            <p>Test by Storybook</p>
          </div>
        </Modal>
      </>
    );
  },
};
