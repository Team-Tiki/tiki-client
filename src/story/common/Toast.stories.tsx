import type { Meta, StoryObj } from '@storybook/react';

import Toast from '@/common/component/Toast/Toast';
import ToastContainer from '@/common/component/ToastContainer/ToastContainer';
import ToastFactory from '@/common/component/ToastContainer/ToastFactory';

import { useToastStore } from '@/shared/store/toast';

const meta = {
  title: 'Common/Toast',
  component: Toast,
  args: {
    children: '토스트 컴포넌트라고 합니다 !',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { createToast } = useToastStore();

    return (
      <>
        <ToastContainer />
        <ToastFactory />

        <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const { createToast } = useToastStore();

    return (
      <>
        <ToastContainer />
        <ToastFactory />

        <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
          Create Toast
        </button>
      </>
    );
  },
};

export const Success: Story = {
  render: () => {
    const { createToast } = useToastStore();

    return (
      <>
        <ToastContainer />
        <ToastFactory />

        <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>
      </>
    );
  },
};
