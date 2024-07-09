import TermArea from '@/page/signIn/index/component/TermArea/TermArea';
import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

const meta = {
  title: 'page/signIn/TermArea',
  component: TermArea,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '40rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    term: '이용 약관',
    isChecked: false,
  },
} satisfies Meta<typeof TermArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCheck = () => {
      setIsClicked((prev) => !prev);
    };

    return (
      <TermArea {...args} onClick={handleCheck} isChecked={isClicked} isRequired>
        이용약관
      </TermArea>
    );
  },
};
