import { BlockFlow } from '@/page/archiving/index/component/TimeBlockModal';
import { Meta, StoryObj } from '@storybook/react';

import ModalContainer from '@/shared/component/Modal/ModalContainer';
import { BlockProvider } from '@/shared/component/Modal/hook/useBlockContext';
import { useModalStore } from '@/shared/component/Modal/store/modal';

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
