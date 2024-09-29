import { Meta, StoryObj } from '@storybook/react';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import ModalContainer from '@/shared/component/Modal/ModalContainer';
import { useModalStore } from '@/shared/component/Modal/store/modal';

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
    const { openModal } = useModalStore();

    return (
      <>
        <button onClick={() => openModal(<DeleteModal teamId={1} id={1} title="block" detail="block" />)}>
          Open Modal
        </button>
        <ModalContainer />
      </>
    );
  },
};
