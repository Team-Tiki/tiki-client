import BlockModal from '@/page/archiving/component/Modal/Block/BlockModal';
import UploadModal from '@/page/archiving/component/Modal/Upload/UploadModal';
import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/common/component/Modal/Modal';
import { useModal } from '@/common/hook/useModal';

const meta: Meta<typeof Modal> = {
  title: 'page/Modal/Block',
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

export const BlockModalTest: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

    const handleNext = () => setCurrentContent(<UploadModal onClose={closeModal} />);

    return (
      <div>
        <button onClick={() => openModal(<BlockModal onNext={handleNext} />)}>Open Modal</button>
        <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
      </div>
    );
  },
};
