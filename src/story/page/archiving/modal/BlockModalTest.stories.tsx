import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import UploadModal from '@/page/archiving/createTimeBlock/component/Upload/UploadModal';
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

    const handleNext = (blockData: { blockName: string; dates: { startDate: string; endDate: string } }) => {
      const teamId = 6;
      const type = 'executive';
      setCurrentContent(<UploadModal onClose={closeModal} teamId={teamId} type={type} blockData={blockData} />);
    };

    return (
      <div>
        <button onClick={() => openModal(<BlockModal onNext={handleNext} />)}>Open Modal</button>
        <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
      </div>
    );
  },
};
