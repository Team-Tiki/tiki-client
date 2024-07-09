import ClubProfileCard from '@/page/showcase/component/ClubProfileCard/ClubProfileCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/ClubProfileCard',
  component: ClubProfileCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Tiki 티키',
    detail: '안녕하세요 티키입니다. 저희는 멋진 웹사이트를 제작합니다.',
    imageUrl: '',
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    detail: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof ClubProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
