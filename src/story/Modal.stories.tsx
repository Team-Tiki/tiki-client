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
  },
  argTypes: {
    component: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 모달 테스트를 위한 간단한 컴포넌트
const ModalContent1 = ({ onNext }: { onNext: () => void }) => (
  <div>
    <h2>첫번째 모달</h2>
    <button onClick={onNext}>Next</button>
  </div>
);

const ModalContent2 = ({ onNext }: { onNext: () => void }) => (
  <div>
    <h2>두번째 모달</h2>
    <button onClick={onNext}>Next</button>
  </div>
);

const ModalContent3 = ({ onClose }: { onClose: () => void }) => (
  <div>
    <h2>마지막 모달</h2>
    <button onClick={onClose}>Close</button>
  </div>
);

export const Default: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => {
    const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

    const handleNext1 = () => setCurrentContent(<ModalContent2 onNext={handleNext2} />);
    const handleNext2 = () => setCurrentContent(<ModalContent3 onClose={closeModal} />);

    return (
      <div>
        <button onClick={() => openModal(<ModalContent1 onNext={handleNext1} />)}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} component={currentContent} />
      </div>
    );
  },
};
