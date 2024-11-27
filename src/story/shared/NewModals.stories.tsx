import { Meta, StoryObj } from '@storybook/react';

import ModalFunnel from '@/shared/component/Modal/ModalFunnel';
import { useOpenModal } from '@/shared/store/modal';

const meta: Meta<typeof ModalFunnel> = {
  title: 'Shared/Modal/ModalsTest',
  component: ModalFunnel,
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

export const ModalsTest: Story = {
  render: () => {
    const openModal = useOpenModal();

    return (
      <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>
    );
  },
};
