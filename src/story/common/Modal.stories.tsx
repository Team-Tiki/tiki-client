import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/common/component/Modal/Modal';
import { useModal } from '@/common/hook/useModal';

import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
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

export const ModalComponent: Story = {
  render: () => {
    const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

    const handleNext1 = () => setCurrentContent(<WorkSpaceName onNext={handleNext2} />);
    const handleNext2 = () => setCurrentContent(<WorkSpaceCategory onNext={handleNext3} />);
    const handleNext3 = () => setCurrentContent(<WorkSpaceImage onNext={handleNext4} />);
    const handleNext4 = () => setCurrentContent(<WorkSpaceComplete />);

    return (
      <div>
        <button onClick={() => openModal(<WorkSpaceName onNext={handleNext1} />)}>Open Modal</button>
        <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
      </div>
    );
  },
};
